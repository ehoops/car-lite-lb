import CarLiteLogo from "@/common/images/car-lite-logo.jpg";
import { H3, H4, NarrowContainer } from "@/styles/basicStyles";
import Image from "next/image";
import { MailingListSubscribe } from "../MailingListSubscribe";
import { TestimonialCarousel } from "../TestimonialCarousel";
import {
  ColumnWrapper,
  Description,
  DescriptionPane,
  ImageSizer,
  RowWrapper,
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
            <Description>
              Driving in Long Beach should be optional. Whether you can’t drive
              or sometimes choose not to, Long Beach should have safe streets
              for you to walk, ride or take transit. Many different groups in
              Long Beach care about this, but it can be hard to keep track of
              all of the agendas, meetings and campaigns going on. We need to
              work together in order to make progress.
            </Description>
            <Description>
              This site will have resources for communicating with the city
              council and for sharing with your network on social media. Our
              mailing list will alert you when we need to activate our networks
              to contact council members and show up at city council.
            </Description>
          </DescriptionPane>
        </NarrowContainer>
      </ZebraStripeRow>
      <ZebraStripeColumn>
        <NarrowContainer>
          <MailingListSubscribe />
        </NarrowContainer>
      </ZebraStripeColumn>
      <ZebraStripeRow>
        <RowWrapper>
          <TestimonialCarousel />
        </RowWrapper>
      </ZebraStripeRow>
      <ZebraStripeRow>
        <NarrowContainer>
          <DescriptionPane>
            <H3>Making outreach easier</H3>
            <RowWrapper>
              <ColumnWrapper>
                <H4>To the city</H4>
                <StyledList>
                  <li>When are agenda items talked about</li>
                  <li>Templates to contact council members</li>
                  <li>Talking points</li>
                </StyledList>
              </ColumnWrapper>
              <ColumnWrapper>
                <H4>To the community</H4>
                <StyledList>
                  <li>Announcements for upcoming agenda items</li>
                  <li>Social media content</li>
                  <li>Talking points</li>
                </StyledList>
              </ColumnWrapper>
            </RowWrapper>
          </DescriptionPane>
        </NarrowContainer>
      </ZebraStripeRow>
    </StyledLandingPageWrapper>
  );
};
