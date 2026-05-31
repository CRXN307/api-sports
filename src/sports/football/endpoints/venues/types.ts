/**
 * Query parameters for the venues endpoint.
 * All parameters are optional and can be combined.
 */
export type GetVenuesParams = {
	id?: number
	name?: string
	city?: string
	country?: string
	/** Minimum 3 characters. */
	search?: string
}

export type VenueResponse = {
	id: number
	name: string
	address: string | null
	city: string | null
	country: string | null
	capacity: number | null
	surface: string | null
	image: string | null
}
