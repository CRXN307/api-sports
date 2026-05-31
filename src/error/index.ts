import type { ApiSportsErrorCode } from "./codes"
import { API_SPORTS_ERROR_CODES } from "./codes"

export { API_SPORTS_ERROR_CODES, type ApiSportsErrorCode } from "./codes"

/**
 * Error thrown by the API-Sports client for all API and HTTP failures.
 *
 * Use `instanceof ApiSportsError` to distinguish API errors from unexpected
 * runtime errors in `catch` blocks.
 */
export class ApiSportsError extends Error {
	/** HTTP status code of the failed response. */
	status: number
	/** Structured error code identifying the failure category. */
	code: ApiSportsErrorCode
	/** Raw error fields returned by the API, if any. */
	errors: Record<string, string>

	constructor(
		message: string,
		options: {
			status: number
			code: ApiSportsErrorCode
			errors?: Record<string, string>
		},
	) {
		super(message)
		this.name = "ApiSportsError"
		this.status = options.status
		this.code = options.code
		this.errors = options.errors ?? {}
	}

	/**
	 * Creates an error from a non-2xx response that carries an `errors` object
	 * (e.g. 429 rate-limit responses).
	 */
	static fromHttpError(status: number, errors: Record<string, string>) {
		const message = Object.values(errors)[0] ?? API_SPORTS_ERROR_CODES.API_ERROR
		const code = status === 429 ? "RATE_LIMIT_EXCEEDED" : "API_ERROR"
		return new ApiSportsError(message, { status, code, errors })
	}

	/**
	 * Creates an error from a 499/500 response that carries a `message` string
	 * instead of the standard error envelope.
	 */
	static fromServerError(status: number, message: string) {
		return new ApiSportsError(message, { status, code: "SERVER_ERROR" })
	}

	/**
	 * Creates an error from a 200 response whose envelope contains a non-empty
	 * `errors` object, indicating an API-level failure.
	 */
	static fromEnvelopeError(status: number, errors: Record<string, string>) {
		const message = Object.values(errors)[0] ?? API_SPORTS_ERROR_CODES.API_ERROR
		return new ApiSportsError(message, { status, code: "API_ERROR", errors })
	}
}
