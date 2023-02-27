---
to: <%= path %>/<%= name %>/<%= h.inflection.underscore(name, false)%>_style.ts
---
import styled from "@emotion/styled";

export const StyledWrapper = styled.div`
  background-color: pink;
`;
