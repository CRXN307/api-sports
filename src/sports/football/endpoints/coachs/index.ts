import type { HttpClient } from "../../../../client"
import type { CoachResponse, GetCoachsParams } from "./types"

/** Returns coach information including career history. */
export function getCoachs(
	client: HttpClient,
	baseUrl: string,
	params?: GetCoachsParams,
) {
	return client.get<CoachResponse[]>(baseUrl, "coachs", params)
}
