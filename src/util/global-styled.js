import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
   
}
body {
    box-sizing: border-box;
    font-family: "Noto Sans KR", NanumSquare, dotum, 돋움, sans-serif;
}

h2 {
    font-weight: 800;
        line-height: 1.5;
        letter-spacing: 0px;
        font-style: normal;
        font-size: 39px;
        color: #222;
        margin-bottom: 30px;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
`;
