import { RequestPromise } from 'request-promise'

declare class campaign {
  get(opts?: {}): RequestPromise

  getOne(id: number, appId: number): RequestPromise

  events(opts?: {}): RequestPromise
}

export type Campaign = campaign
