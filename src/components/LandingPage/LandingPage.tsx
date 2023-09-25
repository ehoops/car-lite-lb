import CarLiteLogo from "@/common/images/car-lite-logo.jpg";
import { NarrowContainer } from "@/styles/basicStyles";
import Image from "next/image";
import { MailingListSubscribe } from "../MailingListSubscribe";
import { TestimonialCarousel } from "../TestimonialCarousel";
import { SocialLinks } from "./components/SocialLinks";
import {
  CarouselZebraStripeWrapper,
  Description,
  DescriptionPane,
  ImageSizer,
  StyledLandingPageWrapper,
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
          <SocialLinks />
        </NarrowContainer>
      </ZebraStripeColumn>
      <ZebraStripeRow>
        <NarrowContainer>
          <DescriptionPane>
            <Description>
              The city of Long Beach should prioritize the development and
              expansion of infrastructure for alternative modes of
              transportation for those who cannot or choose not to drive. Many
              people and groups in Long Beach share this belief and recognize
              the benefits of creating safer streets. However, it can be
              challenging to keep up with the various agendas, meetings, and
              campaigns aimed at improving the quality of life for residents and
              visitors.
            </Description>
            <Description>
              Car-Lite Long Beach seeks to unify like-minded people and entities
              by improving communication, providing education on relevant
              topics, and coordinating the efforts of interested parties. By
              joining us, you will stay informed about safe streets and car-lite
              initiatives in our city. We welcome your collaboration as we
              strive to create a safer, cleaner, and quieter community.
            </Description>
          </DescriptionPane>
        </NarrowContainer>
      </ZebraStripeRow>
      <ZebraStripeColumn>
        <NarrowContainer>
          <MailingListSubscribe />
        </NarrowContainer>
      </ZebraStripeColumn>
      <CarouselZebraStripeWrapper>
        <TestimonialCarousel />
      </CarouselZebraStripeWrapper>
    </StyledLandingPageWrapper>
  );
};
