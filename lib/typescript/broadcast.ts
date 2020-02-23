import { RequestPromise } from 'request-promise'

declare class broadcast {
  get(opts?: {}): RequestPromise
}

export type Broadcast = broadcast
