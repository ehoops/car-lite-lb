import { SmallerThanBreakpoint } from "@/styles/appStyle";
import { H3, P } from "@/styles/basicStyles";
import styled from "@emotion/styled";
import { FormControl } from "@mui/material";
import { CommonThemeProps, getColors, getSpaces } from "czifui";

export const StyledFormControl = styled(FormControl)`
  ${SmallerThanBreakpoint(`
  ${(props: CommonThemeProps) => {
    const spaces = getSpaces(props);

    return `
      ${SmallerThanBreakpoint(`
        margin: ${spaces?.m}px;
      `)}
    `;
  }}
  `)}
`;

export const Title = styled(H3)`
  ${(props: CommonThemeProps) => {
    const colors = getColors(props);

    return `
      color: ${colors?.primary[400]};
    `;
  }}
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  ${SmallerThanBreakpoint(`
    flex-direction: column;
  `)}
`;

export const InputLabel = styled(P)`
  ${(props: CommonThemeProps) => {
    const colors = getColors(props);
    const spaces = getSpaces(props);

    return `
      margin-right: ${spaces?.xxs}px;
      color: ${colors?.primary[400]};
    `;
  }}
`;
