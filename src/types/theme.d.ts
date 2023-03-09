import {} from 'styled-components';
import { lightTheme } from '@themes';

type ThemeType = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}