import { RequestPromise } from 'request-promise'

declare class page {
  get(opts?: {}): RequestPromise
}

export type Page = page
