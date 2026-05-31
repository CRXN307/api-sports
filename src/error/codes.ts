/**
 * Error codes returned by the API-Sports HTTP layer.
 * Each key maps to a human-readable default message.
 */
export const API_SPORTS_ERROR_CODES = {
	RATE_LIMIT_EXCEEDED:
		"Too many requests. You have exceeded the limit of requests per minute of your subscription.",
	SERVER_ERROR:
		"Something went wrong while fetching details. Try again later.",
	API_ERROR: "An API error occurred.",
} as const

/**
 * Union of all known API-Sports error code keys.
 */
export type ApiSportsErrorCode = keyof typeof API_SPORTS_ERROR_CODES
