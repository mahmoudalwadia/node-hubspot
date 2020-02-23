import { RequestPromise } from 'request-promise'

declare class properties {
  getAll(options?: {}): RequestPromise

  get(): RequestPromise

  getByName(name: string): RequestPromise

  create(data: {}): RequestPromise

  update(name: string, data: {}): RequestPromise

  upsert(data: {}): RequestPromise

  getGroups(): RequestPromise

  createGroup(data: {}): void

  updateGroup(name: string, data: {}): void

  deleteGroup(name: string): void

  delete(name: string): RequestPromise
}

export type Properties = properties
