import type { HttpClient } from "@/types";

import type {
	FootballPredictionsResponse,
	GetFootballPredictionsParams,
} from "../types/predictions";

/**
 * Returns match predictions for a fixture.
 *
 * Includes win/draw/loss percentages, predicted winner, advice, team form (last 5),
 * and a head-to-head comparison across 7 metrics.
 *
 * **Recommended calls:** 1 per day.
 *
 * @param params.fixture - The fixture id (required)
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "..." });
 * const { response } = await client.football.getPredictions({ fixture: 867946 });
 * // response: [{ predictions: { winner: { id: 33, name: "Manchester United" }, advice: "Win or Draw ..." }, ... }]
 * ```
 */
export function getPredictions(
	client: HttpClient,
	baseUrl: string,
	params: GetFootballPredictionsParams,
) {
	return client.get<FootballPredictionsResponse[]>(
		baseUrl,
		"predictions",
		params,
	);
}
