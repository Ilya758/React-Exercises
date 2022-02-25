import styled, { useTheme } from "styled-components";

import { createGlobalStyle } from "styled-components";
const CustomStyle = styled.ul({
  color: (props) => (props.type ? "blue" : "green"),
  font: "500 20px Arial, sans-serif",
  background: (props) => props.theme.color,
});

export const GlobalStyle = createGlobalStyle`
  body {
    text-transform: uppercase !important;
  }
`;

// const CustomStyle = styled.ul`
//   color: ${(props) => (props.type ? "blue" : "green")};
//   font: 500 20px Arial, sans-serif;
//   background: ${(props) => props.theme.color};
// `;

CustomStyle.CustomStyle.defaultProps = {
  theme: {
    color: "magenta",
  },
};

const AppStyle = styled(CustomStyle)`
  color: brown;
`;

export default AppStyle;
