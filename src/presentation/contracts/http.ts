interface Query {
  [key: string]: undefined | string | string[] | Query | Query[];
}

export type HttpRequest = {
  headers?: Record<string, string | string[] | undefined>,
  params?: Record<string, string>,
  query?: Query;
  body?: unknown
};

export type HttpResponse = {
  statusCode: number
  body?: unknown
};
