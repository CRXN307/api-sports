import { createHttpClient } from "./client";
import { API_SPORTS_ERROR_CODES } from "./error";
import { football } from "./sports/football";
import type { ClientOptions, HttpClient } from "./types";

/**
 * Wires an HTTP client into the public API-Sports surface.
 *
 * Builds the client via the injected `init` factory, then exposes the sport
 * modules (currently `football`) plus the `$ERROR_CODES` catalog. The `init`
 * indirection keeps the HTTP layer swappable (e.g. a mock client in tests).
 *
 * @param options - Client options ({@link ClientOptions}) forwarded to `init`.
 * @param init - Factory that turns `options` into an {@link HttpClient}.
 * @returns The API-Sports client: `{ football, $ERROR_CODES }`.
 *
 * @example
 * ```ts
 * const client = createApiSports({ apiKey: "xxx" }, createHttpClient)
 * ```
 */
function createApiSports<Options extends ClientOptions>(
  options: Options,
  init: (options: Options) => HttpClient,
) {
  const client = init(options);

  return {
    football: football(client),
    $ERROR_CODES: API_SPORTS_ERROR_CODES,
  };
}

/**
 * Creates an API-Sports client.
 *
 * @example
 * ```ts
 * const client = ApiSports({ apiKey: "xxx" })
 * const { response } = await client.football.getFixtures({ league: 39, season: 2024 })
 * ```
 */
export function apiSports<Options extends ClientOptions>(options: Options) {
  return createApiSports(options, createHttpClient);
}
