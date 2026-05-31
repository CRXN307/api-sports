/**
 * Pagination info returned with every API response.
 */
export type Paging = {
	current: number
	total: number
}

/**
 * Standard envelope returned by every API-Sports endpoint.
 *
 * @typeParam T - The shape of the `response` array items.
 */
export type ApiResponse<T> = {
	get: string
	parameters: Record<string, string> | []
	errors: Record<string, string> | []
	results: number
	paging: Paging
	response: T
}
