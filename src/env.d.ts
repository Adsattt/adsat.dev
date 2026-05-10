import type {
  AttributifyAttributes,
  AttributifyNames,
} from 'unocss/preset-attributify'

type Prefix = 'u-'

declare global {
  namespace astroHTML.JSX {
    interface HTMLAttributes
      extends
        AttributifyAttributes,
        Partial<Record<AttributifyNames<Prefix>, string>> {}
  }
}
