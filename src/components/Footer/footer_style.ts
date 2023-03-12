import styled from "@emotion/styled";
import { CommonThemeProps, getColors } from "czifui";

const FOOTER_HEIGHT = "80px";

export const StyledWrapper = styled.footer`
  min-height: ${FOOTER_HEIGHT};
  ${(props: CommonThemeProps) => {
    const colors = getColors(props);

    return `
      background-color: ${colors?.primary[400]};
    `;
  }}
`;
