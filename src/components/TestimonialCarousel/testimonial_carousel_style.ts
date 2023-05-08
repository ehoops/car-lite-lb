import { SmallerThanBreakpoint } from "@/styles/appStyle";
import { H3 } from "@/styles/basicStyles";
import styled from "@emotion/styled";
import { CommonThemeProps, fontCapsXxxs, getColors, getSpaces } from "czifui";
import { ButtonBack, ButtonNext, Slider } from "pure-react-carousel";

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 190px;
`;

export const StyledSlider = styled(Slider)`
  display: block;
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

export const StyledBackButton = styled(ButtonBack)`
  ${fontCapsXxxs}
  border: none;
  background-color: transparent;
`;

export const StyledNextButton = styled(ButtonNext)`
  ${fontCapsXxxs}
  border: none;
  background-color: transparent;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${(props: CommonThemeProps) => {
    const spaces = getSpaces(props);

    return `
      margin-top: ${spaces?.xs}px;
    `;
  }}
`;
