import { SmallerThanBreakpoint } from "@/styles/appStyle";
import { H3, P } from "@/styles/basicStyles";
import styled from "@emotion/styled";
import { FormControl } from "@mui/material";
import { CommonThemeProps, getColors, getSpaces, InputText } from "czifui";

export const StyledFormControl = styled(FormControl)`
  align-items: center;
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
    const spaces = getSpaces(props);

    return `
      color: ${colors?.primary[400]};
      ${SmallerThanBreakpoint(`
        margin: ${spaces?.xxs}px;
        text-align: center;
      `)}
    `;
  }}
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  ${SmallerThanBreakpoint(`
    flex-direction: column;
    width: 100%;
  `)}
`;

export const InputLabel = styled(P)`
  ${(props: CommonThemeProps) => {
    const colors = getColors(props);
    const spaces = getSpaces(props);

    return `
      margin: ${spaces?.xxxs}px ${spaces?.xxs}px;
      color: ${colors?.primary[400]};
    `;
  }}
`;

export const StyledInputText = styled(InputText)`
  ${(props: CommonThemeProps) => {
    const spaces = getSpaces(props);
    return `
  ${SmallerThanBreakpoint(`
    .MuiOutlinedInput-root {
      width: 100%;
    }
    width: 100%;
    :first-of-type {
      margin-bottom: ${spaces?.xxxs}px;
    }`)}
    `;
  }}
`;
