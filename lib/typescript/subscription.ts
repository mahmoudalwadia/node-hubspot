import { RequestPromise } from 'request-promise'

declare class subscription {
  get(opts?: {}): RequestPromise
  subscribeToAll(email: string): RequestPromise
}

export type Subscription = subscription
