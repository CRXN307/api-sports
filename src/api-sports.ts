import type { ClientOptions, HttpClient } from "./types";
import { API_SPORTS_ERROR_CODES } from "./error";

import { createHttpClient } from "./client";
import { football } from "./sports/football";

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
export function ApiSports<Options extends ClientOptions>(options: Options) {
  return createApiSports(options, createHttpClient);
}
