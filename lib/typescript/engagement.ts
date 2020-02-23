import { RequestPromise } from 'request-promise'

declare class engagement {
  create(data: {}): RequestPromise

  get(opts?: {}): RequestPromise

  update(engagementId: string, data: {}): RequestPromise

  getRecentlyModified(opts?: {}): RequestPromise

  getAssociated(objectType: string, objectId: number, opts?: {}): RequestPromise

  getCallDispositions(): RequestPromise
}

export type Engagement = engagement
