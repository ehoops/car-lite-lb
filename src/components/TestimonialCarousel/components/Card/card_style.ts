import { P } from "@/styles/basicStyles";
import styled from "@emotion/styled";
import { CommonThemeProps, fontBodyM, getCorners, getFontWeights, getSpaces } from "czifui";
import { Slide } from "pure-react-carousel";

export const StyledWrapper = styled(Slide)`
  background-color: white;
  ${(props: CommonThemeProps) => {
    const corners = getCorners(props);

    return `
      box-shadow: inset 0 0 10px #F8A91A;
      border-radius: ${corners?.m}px;
    `;
  }}
`;

export const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${(props: CommonThemeProps) => {
    const spaces = getSpaces(props);

    return `
      padding: ${spaces?.l}px;
    `;
  }}
`;

export const Quote = styled.p`
  margin: 0px;
  ${fontBodyM}
`;

export const Name = styled(P)`
  margin: 0px;
  ${(props: CommonThemeProps) => {
    const fontWeights = getFontWeights(props);
    const spaces = getSpaces(props);

    return `
      margin-top: ${spaces?.xs}px;
      font-weight: ${fontWeights?.semibold};
    `;
  }}
`;
