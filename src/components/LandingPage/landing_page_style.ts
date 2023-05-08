import {
  LargerThanBreakpoint,
  SmallerThanBreakpoint,
  ZebraStripes,
} from "@/styles/appStyle";
import { P } from "@/styles/basicStyles";
import styled from "@emotion/styled";
import { CommonThemeProps, fontBodyM, getSpaces } from "czifui";

export const StyledLandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ZebraStripeRow = styled.div`
  display: flex;
  flex-direction: row;
  ${ZebraStripes}
  ${(props: CommonThemeProps) => {
    const spaces = getSpaces(props);
    return `
      padding: ${spaces?.xl}px;

      ${SmallerThanBreakpoint(`
        flex-direction: column;
        padding: ${spaces?.l}px;
      `)}
    `;
  }}
`;

export const ZebraStripeColumn = styled.div`
  display: flex;
  flex-direction: column;
  ${ZebraStripes}
  ${(props: CommonThemeProps) => {
    const spaces = getSpaces(props);
    return `
      padding: ${spaces?.xl}px;

      ${SmallerThanBreakpoint(`
        padding: ${spaces?.l}px;
      `)}
    `;
  }}
`;

export const DescriptionPane = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled(P)`
  ${fontBodyM}
  ${(props: CommonThemeProps) => {
    const spaces = getSpaces(props);
    return `
      ${SmallerThanBreakpoint(`
        margin: ${spaces?.l}px;
        margin-left: ${spaces?.xl}px;
      `)}
    `;
  }}
`;

export const ImageSizer = styled.div`
  display: flex;
  width: 400px;
  align-self: center;
`;

export const StyledList = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  padding-left: 0;
  margin-top: 0;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${(props: CommonThemeProps) => {
    const spaces = getSpaces(props);
    return `
      width: 100%;
      margin-left: ${spaces?.xxl}px;
      margin-right: ${spaces?.xxl}px;

      ${SmallerThanBreakpoint(`
        flex-direction: column;
        margin: ${spaces?.l}px;
        margin-left: ${spaces?.xl}px;
      `)}
    `;
  }}
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${(props: CommonThemeProps) => {
    const spaces = getSpaces(props);
    return `
      ${LargerThanBreakpoint(`
      :first-of-type {
        margin-right: ${spaces?.xl}px;
      }
    `)}
    `;
  }}
`;
