import type { HttpClient } from "../../../../client"
import type { GetTransfersParams, TransferResponse } from "./types"

/** Returns transfer history for a player or team. */
export function getTransfers(
	client: HttpClient,
	baseUrl: string,
	params?: GetTransfersParams,
) {
	return client.get<TransferResponse[]>(baseUrl, "transfers", params)
}
