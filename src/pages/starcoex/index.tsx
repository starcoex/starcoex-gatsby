import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import { graphql, PageProps } from "gatsby";
import { GatsbyImageProps, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Image } from "../../styles/Image.styles";
import PostTemplate from "../../templates/PostTemplate";

interface IStarcoexProps {
  data: Queries.PostTemplateDataQuery;
}

export default function Starcoex({ data }: IStarcoexProps) {
  const image = getImage(data.markdownRemark?.frontmatter?.image?.childImageSharp?.gatsbyImageData!);
  return (
    <Layout pageTitle={data.markdownRemark?.frontmatter?.title!}>
      <Seo title={data.markdownRemark?.frontmatter?.title!} />
      <Image image={image!} alt={data.markdownRemark?.frontmatter?.title!} />
      <main>
        <h2>{data.markdownRemark?.frontmatter?.title}</h2>
        {/* <div dangerouslySetInnerHTML={{ __html:  }} /> */}
      </main>
    </Layout>
  );
}

export const query = graphql`
  query StarcoexData($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
