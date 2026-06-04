export type HttpClient = {
  get<T>(
    baseUrl: string,
    endpoint: string,
    params?: Record<string, string | number | boolean | undefined>,
  ): Promise<ApiResponse<T>>;
};

export type ClientOptions = {
  apiKey: string;
  fetch?: typeof globalThis.fetch;
};

export type ApiResponse<T> = {
  get: string;
  parameters: Record<string, string> | [];
  errors: Record<string, string> | [];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: T;
};
