import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Karla';
    src: url('/assets/fonts/static/Karla-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Karla';
    src: url('/assets/fonts/static/Karla-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Karla';
    src: url('/assets/fonts/static/Karla-Italic-VariableFont_wght.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Karla';
    src: url('/assets/fonts/static/Karla-VariableFont_wght.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

:root {
  --color-white: hsl(0, 0%, 100%);
  --color-grey-500: hsl(186, 15%, 59%);
  --color-grey-900: hsl(187, 24%, 22%);
  --color-green-200: hsl(148, 38%, 91%);
  --color-green-600: hsl(169, 82%, 27%);
  --color-red: hsl(0, 66%, 54%);
}

* {
  margin: 0;
  padding: 0;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  background-color: var(--color-green-200);
}

body {
  font-family: 'Karla';
  font-weight: 400;
}
`;

export default GlobalStyles;
