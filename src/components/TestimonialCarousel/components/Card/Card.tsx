import { Name, Quote, StyledWrapper, Testimonial } from "./card_style";

interface CardProps {
  children: string | JSX.Element;
  district?: number;
  index: number;
  name?: string;
}

export const Card = ({ children, district, index, name }: CardProps) => {
  return (
    <StyledWrapper index={index}>
      <Testimonial>
        <Quote>{`... ${children}`}</Quote>
        <Name>{`${name}, District ${district}`}</Name>
      </Testimonial>
    </StyledWrapper>
  );
};
