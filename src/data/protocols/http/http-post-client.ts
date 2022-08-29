import { HttpResponse } from '@/data/protocols/http/http-response'

/* eslint-disable @typescript-eslint/ban-types */
export type HttpPostParams = {
  url: string
  body?: object
}
export interface HttpPostClient {
  post(params: HttpPostParams): Promise<HttpResponse>
}
