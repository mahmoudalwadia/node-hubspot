import { RequestPromise } from 'request-promise'

declare class marketingEmail {
  getAll(opts?: {}): RequestPromise

  get(opts?: {}): RequestPromise

  getById(id: string): RequestPromise

  create(data: {}): RequestPromise

  update(id: string, data: {}): RequestPromise

  delete(id: string): RequestPromise
}

export type MarketingEmail = marketingEmail
