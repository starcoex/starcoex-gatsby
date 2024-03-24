import React from "react";
import {
  CardWrapper,
  DateWrapper,
  ImgWrapper,
  ReadingTimeWrapper,
  StatWrapper,
  TextWrapper,
} from "../../styles/BlogPostCard.styles";
import { GatsbyImage } from "gatsby-plugin-image";

export default function BlogPostCard() {
  return (
    <CardWrapper>
      <ImgWrapper>
        {/* <GatsbyImage image={image} /> */}
        image
      </ImgWrapper>
      <TextWrapper>
        text
        <StatWrapper>
          state
          <DateWrapper>2024</DateWrapper>
          <ReadingTimeWrapper>reading</ReadingTimeWrapper>
        </StatWrapper>
      </TextWrapper>
      BlogPost
    </CardWrapper>
  );
}
