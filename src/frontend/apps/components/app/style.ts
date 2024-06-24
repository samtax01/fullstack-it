import styled, { css } from "styled-components";
export const FontCss = css`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

export const StyledContainer = styled.div.attrs(() => ({
  id: "app-container",
}))`
  body {
    padding: 0;
    margin: 0;
  }

  ${FontCss};
`;
