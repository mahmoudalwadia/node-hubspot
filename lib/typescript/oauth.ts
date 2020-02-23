import { RequestPromise } from 'request-promise'

declare class oAuth {
  getAuthorizationUrl(opts?: {}): string
  getAccessToken(data: { code: string }): RequestPromise
  refreshAccessToken(): RequestPromise
  getPortalInfo(token?: string): RequestPromise
}

export type OAuth = oAuth
