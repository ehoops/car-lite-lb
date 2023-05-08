import { NarrowContainer } from "@/styles/basicStyles";
import { CarouselProvider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Card } from "./components/Card";
import { testimonialCarouselContent } from "./content";
import {
  ButtonContainer,
  CarouselWrapper,
  StyledBackButton,
  StyledNextButton,
  StyledSlider,
  Title,
} from "./testimonial_carousel_style";

export const TestimonialCarousel = () => {
  return (
    <NarrowContainer>
      <Title>I support safe streets in Long Beach because...</Title>
      <CarouselWrapper>
        <CarouselProvider
          naturalSlideWidth={1000}
          naturalSlideHeight={300}
          totalSlides={testimonialCarouselContent.length}
          visibleSlides={1}
        >
          <StyledSlider>
            {testimonialCarouselContent.map((testimonial, index) => (
              <Card
                key={testimonial.key}
                index={index}
                name={testimonial.name}
                district={testimonial.district}
              >
                {testimonial.reason}
              </Card>
            ))}
          </StyledSlider>
          <ButtonContainer>
            <StyledBackButton>Back</StyledBackButton>
            <StyledNextButton>Next</StyledNextButton>
          </ButtonContainer>
        </CarouselProvider>
      </CarouselWrapper>
    </NarrowContainer>
  );
};
