import { describe, expect, it } from "vitest"
import { createHttpClient } from "./client"
import { ApiSportsError } from "./error"

function envelope<T>(response: T) {
	return {
		get: "test",
		parameters: [],
		errors: [],
		results: 1,
		paging: { current: 1, total: 1 },
		response,
	}
}

function mockFetch(body: unknown, status = 200): typeof globalThis.fetch {
	return async () =>
		new Response(JSON.stringify(body), {
			status,
			headers: { "Content-Type": "application/json" },
		})
}

describe("createHttpClient", () => {
	describe("request", () => {
		it("attaches x-apisports-key header to every request", async () => {
			let capturedInit: RequestInit | undefined

			const client = createHttpClient({
				apiKey: "my-key",
				fetch: async (_url, init) => {
					capturedInit = init
					return new Response(JSON.stringify(envelope([])))
				},
			})

			await client.get("https://v3.football.api-sports.io", "timezone")

			expect(
				(capturedInit?.headers as Record<string, string>)["x-apisports-key"],
			).toBe("my-key")
		})

		it("builds the correct URL from baseUrl and endpoint", async () => {
			let capturedUrl: string | undefined

			const client = createHttpClient({
				apiKey: "test",
				fetch: async (url) => {
					capturedUrl = url.toString()
					return new Response(JSON.stringify(envelope([])))
				},
			})

			await client.get("https://v3.football.api-sports.io", "fixtures", {
				league: 39,
				season: 2024,
			})

			expect(capturedUrl).toBe(
				"https://v3.football.api-sports.io/fixtures?league=39&season=2024",
			)
		})

		it("skips undefined params", async () => {
			let capturedUrl: string | undefined

			const client = createHttpClient({
				apiKey: "test",
				fetch: async (url) => {
					capturedUrl = url.toString()
					return new Response(JSON.stringify(envelope([])))
				},
			})

			await client.get("https://v3.football.api-sports.io", "fixtures", {
				league: 39,
				team: undefined,
			})

			expect(capturedUrl).toBe(
				"https://v3.football.api-sports.io/fixtures?league=39",
			)
		})

		it("returns the full response envelope on success", async () => {
			const data = [{ id: 1, name: "Premier League" }]

			const client = createHttpClient({
				apiKey: "test",
				fetch: mockFetch(envelope(data)),
			})

			const result = await client.get(
				"https://v3.football.api-sports.io",
				"leagues",
			)

			expect(result.response).toEqual(data)
			expect(result.results).toBe(1)
			expect(result.paging).toEqual({ current: 1, total: 1 })
		})
	})

	describe("error handling", () => {
		it("throws ApiSportsError with RATE_LIMIT_EXCEEDED on 429", async () => {
			const client = createHttpClient({
				apiKey: "test",
				fetch: mockFetch(
					{
						errors: { rateLimit: "Too many requests" },
						results: 0,
						response: [],
					},
					429,
				),
			})

			const error = await client
				.get("https://v3.football.api-sports.io", "fixtures")
				.catch((e) => e)

			expect(error).toBeInstanceOf(ApiSportsError)
			expect(error.code).toBe("RATE_LIMIT_EXCEEDED")
			expect(error.status).toBe(429)
		})

		it("throws ApiSportsError with SERVER_ERROR on 500", async () => {
			const client = createHttpClient({
				apiKey: "test",
				fetch: mockFetch(
					{ message: "Something went wrong while fetching details." },
					500,
				),
			})

			const error = await client
				.get("https://v3.football.api-sports.io", "fixtures")
				.catch((e) => e)

			expect(error).toBeInstanceOf(ApiSportsError)
			expect(error.code).toBe("SERVER_ERROR")
			expect(error.status).toBe(500)
			expect(error.message).toBe("Something went wrong while fetching details.")
		})

		it("throws ApiSportsError with API_ERROR on 200 with non-empty errors", async () => {
			const client = createHttpClient({
				apiKey: "test",
				fetch: mockFetch({
					get: "fixtures",
					parameters: [],
					errors: { bug: "Internal error", report: "fixtures" },
					results: 0,
					paging: { current: 1, total: 1 },
					response: [],
				}),
			})

			const error = await client
				.get("https://v3.football.api-sports.io", "fixtures")
				.catch((e) => e)

			expect(error).toBeInstanceOf(ApiSportsError)
			expect(error.code).toBe("API_ERROR")
			expect(error.status).toBe(200)
			expect(error.message).toBe("Internal error")
		})
	})
})
