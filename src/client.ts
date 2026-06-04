import { ApiSportsError } from "./error";
import type { ApiResponse, HttpClient, ClientOptions } from "./types";

export function createHttpClient(options: ClientOptions): HttpClient {
  const fetchFn = options.fetch ?? globalThis.fetch;

  return {
    async get<T>(
      baseUrl: string,
      endpoint: string,
      params?: Record<string, string | number | boolean | undefined>,
    ): Promise<ApiResponse<T>> {
      const url = new URL(`${baseUrl}/${endpoint}`);

      if (params) {
        for (const [key, value] of Object.entries(params)) {
          if (value !== undefined) {
            url.searchParams.set(key, String(value));
          }
        }
      }

      const response = await fetchFn(url.toString(), {
        headers: {
          "x-apisports-key": options.apiKey,
        },
      });

      const body = await response.json();

      if (!response.ok) {
        /* 499/500: { message: "Something went wrong..." } */
        if (typeof body.message === "string") {
          throw ApiSportsError.fromServerError(response.status, body.message);
        }

        /* 429: { errors: { rateLimit: "Too many requests..." } } */
        const errors =
          typeof body.errors === "object" && !Array.isArray(body.errors)
            ? (body.errors as Record<string, string>)
            : {};
        throw ApiSportsError.fromHttpError(response.status, errors);
      }

      /* 200 with errors in envelope: { errors: { bug: "..." }, response: [] } */
      if (
        typeof body.errors === "object" &&
        !Array.isArray(body.errors) &&
        Object.keys(body.errors).length > 0
      ) {
        throw ApiSportsError.fromEnvelopeError(
          response.status,
          body.errors as Record<string, string>,
        );
      }

      return body as ApiResponse<T>;
    },
  };
}
