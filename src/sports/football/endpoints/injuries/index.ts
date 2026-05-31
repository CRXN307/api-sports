import type { HttpClient } from "../../../../client"
import type { GetInjuriesParams, InjuryResponse } from "./types"

/** Returns injury and suspension reports for players. */
export function getInjuries(
	client: HttpClient,
	baseUrl: string,
	params?: GetInjuriesParams,
) {
	return client.get<InjuryResponse[]>(baseUrl, "injuries", params)
}
