import React from "react";
import { Wrapper, FakeBGImage, Content } from "../../styles/BGImage.styles";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface IBGImageProps {
  children?: React.ReactNode;
  data?: Queries.HeroDataQuery;
  title: string;
  className?: string | undefined;
  image: IGatsbyImageData;
}

export default function BGImage({ children, data, title, className, image }: IBGImageProps) {
  return (
    <Wrapper>
      <FakeBGImage title={title} image={image} alt={data?.markdownRemark?.frontmatter?.heroImageText!} />
      <Content className={className}>{children}</Content>
    </Wrapper>
  );
}
