import styled from "@emotion/styled";
import { CommonThemeProps, getColors } from "czifui";

const NAV_BAR_HEIGHT = "40px";

export const StyledWrapper = styled.header`
  min-height: ${NAV_BAR_HEIGHT};
  ${(props: CommonThemeProps) => {
    const colors = getColors(props);

    return `
      background-color: ${colors?.primary[400]};
    `;
  }}
`;
