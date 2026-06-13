import type { HttpClient } from "@/types";

import type {
	FootballTransfersResponse,
	GetFootballTransfersParams,
} from "../types/transfers";

/**
 * Returns transfer history for a player or team.
 *
 * Each entry groups all transfers for one player, with an array of individual
 * transfer records including date, type (e.g. `"Free"`, `"Loan"`, fee amount),
 * and the teams involved.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.player - The player id
 * @param params.team - The team id
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getTransfers({ player: 306 });
 * // response: [{ player: { id: 306, name: "Marcus Rashford" }, transfers: [{ date: "2019-07-01", type: "Free", teams: { in: {...}, out: {...} } }] }]
 * ```
 */
export function getTransfers<P extends GetFootballTransfersParams | undefined = undefined>(
	client: HttpClient,
	baseUrl: string,
	params?: P,
) {
	return client.get<FootballTransfersResponse[], P>(baseUrl, "transfers", params);
}
