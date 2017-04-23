import * as H from './helpers'
const { getRandom, hex, join, log, px, slice, split, toString } = H;
export const getRgbHex = (id, at = 0, from = 0, to = id.length) =>
    hex(
      join(
        slice(
          split(id, from, to)
          , at
        )
    )
)

