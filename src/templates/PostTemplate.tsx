import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { graphql, PageProps } from "gatsby";
import { GatsbyImageProps, IGatsbyImageData } from "gatsby-plugin-image";
import { Image } from "../styles/Image.styles";

interface IPostTemplateProps {
  data: Queries.PostTemplateDataQuery;
  image: IGatsbyImageData;
}

export default function PostTemplate({ data, image }: IPostTemplateProps) {
  return (
    <Layout pageTitle={data.markdownRemark?.frontmatter?.title!}>
      <Seo title={data.markdownRemark?.frontmatter?.title!} />
      <Image image={image!} alt={data.markdownRemark?.frontmatter?.title!} />
      <main>
        <h2>{data.markdownRemark?.frontmatter?.title}</h2>
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      </main>
    </Layout>
  );
}

export const query = graphql`
  query PostTemplateData($slug: String) {
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
