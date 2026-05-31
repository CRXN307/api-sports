/**
 * Account and subscription info returned by the status endpoint.
 * This call does not count against the daily quota.
 */
export type StatusResponse = {
	account: {
		firstname: string
		lastname: string
		email: string
	}
	subscription: {
		plan: string
		end: string
		active: boolean
	}
	requests: {
		current: number
		limit_day: number
	}
}
