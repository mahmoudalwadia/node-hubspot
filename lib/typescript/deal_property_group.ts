import { RequestPromise } from 'request-promise'

declare class groups {
  getAll(options?: {}): RequestPromise

  get(query?: {}): RequestPromise

  create(data: {}): RequestPromise

  update(name: string, data: {}): RequestPromise

  delete(name: string): RequestPromise

  upsert(data: {}): RequestPromise
}

export type Groups = groups
