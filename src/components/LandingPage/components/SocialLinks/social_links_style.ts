import styled from "@emotion/styled";
import { CommonThemeProps, getSpaces } from "czifui";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageSizer = styled.div`
  display: flex;
  max-width: 50px;
  align-self: center;
  ${(props: CommonThemeProps) => {
    const spaces = getSpaces(props);
    return `
          margin: 0 ${spaces?.m}px;
      `;
  }}
`;
