import { createGlobalStyle, DefaultTheme } from "styled-components";
import MuliRegular from "../fonts/Muli-Regular.woff";
import MuliBlack from "../fonts/Muli-Black.woff";

export const colors = {
  white: "white",
  darkGrey: "#1a1c20",
  deepDarkGrey: "#404040",
  blueShade1: "#215973",
  blueShade2: "#6fadc6",
  blueShade3: "#d1e1e9",
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: colors.darkGrey,
    menuBackground: colors.blueShade1,
    textDark: colors.blueShade3,
    textMain: colors.blueShade2,
    textSecondary: colors.blueShade3,
  },
};

export const lightTheme: DefaultTheme = {
  colors: {
    background: colors.white,
    menuBackground: colors.blueShade3,
    textDark: colors.blueShade1,
    textMain: colors.blueShade2,
    textSecondary: colors.deepDarkGrey,
  },
};

export const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}

:root {
    --site-max-width: 1200px;
  }

  @font-face {
    font-family: 'Muli Regular';
    src: local('Muli Regular'), local('MuliRegular'),
      url(${MuliRegular}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Muli Black';
    src: local('Muli Black'), local('MuliBlack'),
      url(${MuliBlack}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textSecondary};
    font-family: "Muli Regular", Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0 20px 80px 20px;
    transition: all 0.5s ease;
  }

  main {
    max-width: 960px;
    margin: 40px auto;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.textMain};
    font-family: "Muli Black", Arial, Helvetica, sans-serif;
    transition: all 0.5s ease;
    letter-spacing: 1px;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }

  h2 {
    font-size: 1rem;
    letter-spacing: 1.8px;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    margin: 30px 0 -15px 0;

    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  a {
    text-decoration: none;
  }
`;
