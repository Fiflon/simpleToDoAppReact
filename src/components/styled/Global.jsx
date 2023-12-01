import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
* {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `;

export default GlobalStyles;
