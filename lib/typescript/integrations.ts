import { RequestPromise } from 'request-promise'

declare class integrations {
  getAccountDetails(): RequestPromise
}

export type Integrations = integrations
