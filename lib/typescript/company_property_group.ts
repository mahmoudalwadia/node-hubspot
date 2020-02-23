import { RequestPromise } from 'request-promise'

declare class groups {
  get(query?: {}): RequestPromise

  create(data: {}): RequestPromise

  update(name: string, data: {}): RequestPromise

  upsert(data: {}): RequestPromise
}

export type Groups = groups
