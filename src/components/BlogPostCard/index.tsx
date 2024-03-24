import React from "react";
import {
  CardWrapper,
  DateWrapper,
  ImgWrapper,
  ReadingTimeWrapper,
  StatWrapper,
  TextWrapper,
} from "../../styles/BlogPostCard.styles";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Link } from "gatsby";
import DateIcon from "../../images/calendar.svg";
import TimeIcon from "../../images/watch.svg";

interface IBlogPostCardProps {
  slug: string;
  image: IGatsbyImageData;
  title: string;
  readingTime: string;
  excerpt: string;
  date: string;
}

export default function BlogPostCard({ slug, image, title, readingTime, excerpt, date }: IBlogPostCardProps) {
  return (
    <CardWrapper>
      <ImgWrapper>
        <GatsbyImage image={image} alt={title} />
      </ImgWrapper>
      <TextWrapper>
        <Link to={slug}>
          <h2>{title}</h2>
        </Link>
        <StatWrapper>
          <DateWrapper>
            <img src={DateIcon} alt="date" />
            {date}
          </DateWrapper>
          <ReadingTimeWrapper>
            <img src={TimeIcon} alt="time" />
            {readingTime}
          </ReadingTimeWrapper>
        </StatWrapper>
        <p>{excerpt}</p>
      </TextWrapper>
    </CardWrapper>
  );
}
