import type { HttpClient } from "../../../../client"
import type { PredictionResponse } from "./types"

/** Returns predictions for a specific fixture. `fixture` is required. */
export function getPredictions(
	client: HttpClient,
	baseUrl: string,
	params: { fixture: number },
) {
	return client.get<PredictionResponse[]>(baseUrl, "predictions", params)
}
