export enum HttpStatusCode {
  ok = 20,
  noContent = 204,
  unathorized = 401,
  badRequest = 400,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode;
  body?: T;
};
