import '@emotion/react';

import { Theme as LocalTheme } from 'styles/themes';

declare module '@emotion/react' {
  export interface Theme extends LocalTheme {}
}
