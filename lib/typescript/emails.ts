import { RequestPromise } from 'request-promise'

declare class emails {
  sendTransactionalEmail(data: {}): RequestPromise
}

export type Emails = emails
