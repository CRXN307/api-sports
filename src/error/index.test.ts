import { describe, expect, it } from "vitest"
import { ApiSportsError } from "./index"

describe("ApiSportsError", () => {
	it("is an instance of Error and ApiSportsError", () => {
		const error = ApiSportsError.fromServerError(500, "Something went wrong")
		expect(error).toBeInstanceOf(Error)
		expect(error).toBeInstanceOf(ApiSportsError)
		expect(error.name).toBe("ApiSportsError")
	})

	describe("fromHttpError", () => {
		it("sets RATE_LIMIT_EXCEEDED for status 429", () => {
			const error = ApiSportsError.fromHttpError(429, {
				rateLimit: "Too many requests",
			})
			expect(error.code).toBe("RATE_LIMIT_EXCEEDED")
			expect(error.status).toBe(429)
			expect(error.message).toBe("Too many requests")
			expect(error.errors).toEqual({ rateLimit: "Too many requests" })
		})

		it("sets API_ERROR for other non-2xx statuses", () => {
			const error = ApiSportsError.fromHttpError(400, { param: "Invalid param" })
			expect(error.code).toBe("API_ERROR")
			expect(error.status).toBe(400)
			expect(error.message).toBe("Invalid param")
		})

		it("uses fallback message when errors object is empty", () => {
			const error = ApiSportsError.fromHttpError(429, {})
			expect(error.message).toBe("An API error occurred.")
		})
	})

	describe("fromServerError", () => {
		it("sets SERVER_ERROR with the provided message", () => {
			const error = ApiSportsError.fromServerError(500, "Something went wrong")
			expect(error.code).toBe("SERVER_ERROR")
			expect(error.status).toBe(500)
			expect(error.message).toBe("Something went wrong")
			expect(error.errors).toEqual({})
		})
	})

	describe("fromEnvelopeError", () => {
		it("sets API_ERROR with the first error message from the envelope", () => {
			const error = ApiSportsError.fromEnvelopeError(200, {
				bug: "Internal error",
				report: "fixtures",
			})
			expect(error.code).toBe("API_ERROR")
			expect(error.status).toBe(200)
			expect(error.message).toBe("Internal error")
			expect(error.errors).toEqual({ bug: "Internal error", report: "fixtures" })
		})

		it("uses fallback message when errors object is empty", () => {
			const error = ApiSportsError.fromEnvelopeError(200, {})
			expect(error.message).toBe("An API error occurred.")
		})
	})
})
