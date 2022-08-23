/* eslint-disable @typescript-eslint/ban-types */
export type HttpPostParams = {
  url: string
  body?: object
}
export interface HttpPostClient {
  post(params: HttpPostParams): Promise<void>
}
