/**
 * Query parameters for the transfers endpoint.
 * At least one of `player` or `team` is required.
 */
export type GetTransfersParams = {
	player?: number
	team?: number
}

export type TransferResponse = {
	player: { id: number; name: string }
	update: string
	transfers: Array<{
		date: string
		type: string
		teams: {
			in: { id: number; name: string; logo: string }
			out: { id: number; name: string; logo: string }
		}
	}>
}
