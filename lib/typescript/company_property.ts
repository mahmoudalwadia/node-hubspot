import { RequestPromise } from 'request-promise'

import { Groups } from './company_property_group'

declare class properties {
  getAll(options?: {}): RequestPromise

  get(query?: {}): RequestPromise

  getByName(name: string): RequestPromise

  create(data: {}): RequestPromise

  update(name: string, data: {}): RequestPromise

  upsert(data: {}): RequestPromise

  groups: Groups
}

export type Properties = properties
