import { lightTheme } from '@styles'
import {} from 'styled-components'

type ThemeType = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
