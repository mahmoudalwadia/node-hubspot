import { RequestPromise } from 'request-promise'

declare class pipeline {
  get(opts?: {}): RequestPromise

  getById(number: string): RequestPromise
}

export type Pipeline = pipeline
