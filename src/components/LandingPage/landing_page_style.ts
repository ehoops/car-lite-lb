import { ZebraStripes } from "@/styles/appStyle";
import styled from "@emotion/styled";

export const StyledLandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ZebraStripeRow = styled.div`
  display: flex;
  flex-direction: row;
  ${ZebraStripes}
`;

export const ZebraStripeColumn = styled.div`
  display: flex;
  flex-direction: column;
  ${ZebraStripes}
`;

export const DescriptionPane = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageSizer = styled.div`
  display: flex;
  width: 400px;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 0;
`;
