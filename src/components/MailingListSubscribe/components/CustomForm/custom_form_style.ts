import styled from "@emotion/styled";
import { CommonThemeProps, getBorders } from "czifui";

// TODO: unused
export const SuccessWrapper = styled.div`
  ${(props: CommonThemeProps) => {
    const borders = getBorders(props);

    return `
      border: ${borders?.success};
    `;
  }}
`;
