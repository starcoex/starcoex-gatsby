import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const Image = styled(GatsbyImage)`
  border-radius: 10px;
  max-width: var(--site-max-width);
  margin: 0 auto;
  max-height: 300px;
`;
