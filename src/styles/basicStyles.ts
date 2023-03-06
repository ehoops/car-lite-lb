// includes shared styles for basic html elements
import styled from "@emotion/styled";
import {
  CommonThemeProps,
  fontBodyS,
  fontHeaderL,
  fontHeaderS,
  fontHeaderXl,
  fontHeaderXxl,
  getColors,
  getFontWeights,
  getSpaces,
} from "czifui";
import { LargerThanBreakpoint } from "./appStyle";

export const NarrowContainer = styled.div`
  max-width: 800px;
  ${LargerThanBreakpoint(`
    min-width: 400px;
  `)}
  margin: 0 auto 0;
`;

export const B = styled.b`
  ${(props: CommonThemeProps) => {
    const fontWeights = getFontWeights(props);

    return `
      font-weight: ${fontWeights?.semibold};
    `;
  }}
`;

export const H1 = styled.h1`
  ${fontHeaderXxl}

  margin-bottom: 0;
  position: relative;
`;

export const H2 = styled.h2`
  ${fontHeaderXl}

  margin-top: 40px;
  position: relative;
`;

export const H3 = styled.h3`
  ${fontHeaderL}

  margin-top: 0px;
  position: relative;

  ${(props: CommonThemeProps) => {
    const colors = getColors(props);

    return `
      color: ${colors?.primary[400]};
    `;
  }}
`;

export const Number = styled.span`
  position: absolute;
  right: 100%;
  margin-right: 8px;
`;

export const H4 = styled.h4`
  ${fontHeaderS}

  ${(props: CommonThemeProps) => {
    const colors = getColors(props);
    const spaces = getSpaces(props);

    return `
      color: ${colors?.gray[500]};
      margin: ${spaces?.xxs}px 0;
    `;
  }}
`;

export const P = styled.p`
  ${fontBodyS}
`;

export const Title = styled.div`
  margin-bottom: 50px;
`;

export const transparentScrollbars = (): string => {
  return `
    scrollbar-color: transparent unset;
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  `;
};
