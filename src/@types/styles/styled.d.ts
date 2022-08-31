import "styled-components";

import { theme } from "@styles/theme/theme.s";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
