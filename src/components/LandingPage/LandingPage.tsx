import CarLiteLogo from "@/common/images/car-lite-logo.jpg";
import { H2, H3, H4, NarrowContainer } from "@/styles/basicStyles";
import Image from "next/image";
import { MailingListSubscribe } from "../MailingListSubscribe";
import {
  DescriptionPane,
  ImageSizer,
  StyledLandingPageWrapper,
  StyledList,
  ZebraStripeColumn,
  ZebraStripeRow,
} from "./landing_page_style";

export const LandingPage = () => {
  return (
    <StyledLandingPageWrapper>
      <ZebraStripeColumn>
        <NarrowContainer>
          <ImageSizer>
            <Image src={CarLiteLogo} alt="Car Lite Long Beach Logo" />
          </ImageSizer>
        </NarrowContainer>
      </ZebraStripeColumn>
      <ZebraStripeRow>
        <NarrowContainer>
          <DescriptionPane>
            <H3>People in Long Beach working for</H3>
            <StyledList>
              <li>Safe streets for all</li>
              <li>Walkable neighborhoods</li>
              <li>Alternatives to driving</li>
            </StyledList>
          </DescriptionPane>
        </NarrowContainer>
      </ZebraStripeRow>
      <ZebraStripeColumn>
        <NarrowContainer>
          <MailingListSubscribe />
        </NarrowContainer>
      </ZebraStripeColumn>
      <ZebraStripeRow>
        <NarrowContainer>
          <DescriptionPane>
            <H3>Making outreach easier</H3>
            <H4>To the city</H4>
            <StyledList>
              <li>When are agenda items talked about</li>
              <li>Templates to contact council members</li>
              <li>Talking points</li>
            </StyledList>
            <H4>To the community</H4>
            <StyledList>
              <li>Announcements for upcoming agenda items</li>
              <li>Social media content</li>
              <li>Talking points</li>
            </StyledList>
          </DescriptionPane>
        </NarrowContainer>
      </ZebraStripeRow>
    </StyledLandingPageWrapper>
  );
};
