import type { HttpClient } from "../../../../client"
import type { StatusResponse } from "./types"

/**
 * Returns account info, subscription plan, and daily request usage.
 * This call does not count against the daily quota.
 */
export function getStatus(client: HttpClient, baseUrl: string) {
	return client.get<StatusResponse>(baseUrl, "status")
}
