import {createGlobalStyle} from "styled-components";
import {themeList} from "../contexts/theme";

export const GlobalStyles = createGlobalStyle`
:root{
  /* COLORS */
  --color-red: black
}
body {
  transition: all .5s;
  background-color: ${({theme: {theme}}) =>
    theme === themeList.LIGHT ? "var(--color-red)" : "var(--ds-light-1)"};
}
`;
