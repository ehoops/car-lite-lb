---
to: <%= path %>/<%= name %>/<%= name %>.tsx
---
import { StyledWrapper } from "./<%= h.inflection.underscore(name, false)%>_style";

interface <%= name %>Props {
  // define types here
}

export const <%= name %> = ({}: <%= name %>Props) => {
  return (
    <StyledWrapper>Your new component</StyledWrapper>
  );
};