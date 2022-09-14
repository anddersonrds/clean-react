import { HttpResponse } from '@/data/protocols/http/http-response'

/* eslint-disable @typescript-eslint/ban-types */
export type HttpPostParams<T> = {
  url: string
  body?: T
}
export interface HttpPostClient<T, R> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>
}
