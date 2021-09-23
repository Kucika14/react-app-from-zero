import type _log from './common/log'

declare global {
  // for log
  const log: typeof _log
}
