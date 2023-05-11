import styled from "@emotion/styled";
import { CommonThemeProps, getSpaces } from "czifui";

export const StyledApp = styled.div`
  height: 99vh;
  flex-flow: column wrap;
  justify-content: center;
`;

export const BREAKPOINT = "872px";

export const SmallerThanBreakpoint = (styles: string): string => {
  return `
    @media (max-width: ${BREAKPOINT}) {
      ${styles}
    }
  `;
};

export const LargerThanBreakpoint = (styles: string): string => {
  return `
    @media (min-width: ${BREAKPOINT}) {
      ${styles}
    }
  `;
};

export const PAGE_PADDING = 125;

const NAV_BAR_HEIGHT_PX = 46;
export const PageContent = styled.div`
  height: calc(100% - ${NAV_BAR_HEIGHT_PX}px);
`;

export const ContentStyles = (props: CommonThemeProps): string => {
  const spaces = getSpaces(props);

  return `
    ${LargerThanBreakpoint(`
      padding: ${spaces?.xl}px ${PAGE_PADDING}px;
    `)}

    ${SmallerThanBreakpoint(`
      padding: ${spaces?.xl}px;
    `)}
  `;
};

export const MAX_CONTENT_WIDTH = 1308;
export const MAX_MODAL_WIDTH = 600;

export const ZebraStripes = (): string => {
  return `
    width: 100%;
    :nth-of-type(even) {
      background-color: rgba(0, 162, 222, 0.10);
    }
  `;
};
