import type { HttpClient } from "../../../../client"

/**
 * Returns the list of available timezones to use in the fixtures endpoint.
 */
export function getTimezones(client: HttpClient, baseUrl: string) {
	return client.get<string[]>(baseUrl, "timezone")
}
