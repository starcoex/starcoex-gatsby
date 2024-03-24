import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import { useHeroQuery } from "../../hooks/useHeroQuery";
import { Wrapper, FakeBGImage, Content } from "../../styles/BGImage.styles";
import BGImage from "../BGImage";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { HeroWrapper, TextWrapper } from "../../styles/Hero.styles";

interface IHeroProps {
  data: any;
  // children: React.ReactNode;
}

export default function Hero() {
  const data = useHeroQuery();
  const image = getImage(data.markdownRemark?.frontmatter?.heroImage?.childImageSharp?.gatsbyImageData!);
  return (
    <HeroWrapper>
      <BGImage title="heroImage" image={image!}>
        <TextWrapper>
          <h2>{data.markdownRemark?.frontmatter?.heroImageText}</h2>
          <Link to={data.markdownRemark?.frontmatter?.heroImageBtnLink!}>
            <button>{data.markdownRemark?.frontmatter?.heroImageBtnText}</button>
          </Link>
        </TextWrapper>
      </BGImage>
    </HeroWrapper>
  );
}

// export const query = graphql`
//   query BlogList {
//     allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }, sort: { frontmatter: { date: DESC } }) {
//       edges {
//         node {
//           fields {
//             readingTime {
//               text
//             }
//           }
//           frontmatter {
//             date
//             title
//             slug
//             image
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;
