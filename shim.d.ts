import type { ProtocolWithReturn } from 'webext-bridge'
import type { Bookmark, Job } from '~/type'

declare module 'webext-bridge' {
  export interface ProtocolMap {
    // define message protocol types
    // see https://github.com/antfu/webext-bridge#type-safe-protocols
    'get-current-tab': ProtocolWithReturn<{ tabId: number }, { title?: string }>
    'schedule:update': Job[]
    'subscribe:push': Bookmark
    'subscribe:none': null
    'subscribe:remind': Bookmark
    'subscribe:refresh': Bookmark
  }
}
