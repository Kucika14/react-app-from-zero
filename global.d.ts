import type _log from './common/Logger/log'

declare global {
  // for log
  const log: typeof _log
}
