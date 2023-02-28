import { lightTheme } from '@styles'
import {} from 'styled-components'

type ThemeType = typeof lightTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
