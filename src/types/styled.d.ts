import "styled-components";
import { colors } from "../styles/GlobalStyles";
import { ColorsTypes } from "../styles/GlobalStyles";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      menuBackground: string;
      textDark: string;
      textMain: string;
      textSecondary: string;
    };
  }
}
