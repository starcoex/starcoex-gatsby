import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { graphql, PageProps } from "gatsby";
import { Image } from "../styles/Image.styles";
import { getImage } from "gatsby-plugin-image";

interface IPageTemplateProps {
  data: Queries.PostTemplateDataQuery;
}

export default function PageTemplate({ data }: IPageTemplateProps) {
  const image = getImage(data.markdownRemark?.frontmatter?.image?.childImageSharp?.gatsbyImageData!);
  return (
    <Layout pageTitle={data.markdownRemark?.frontmatter?.title!}>
      <Seo title={data.markdownRemark?.frontmatter?.title!} />
      <Image image={image!} alt={data.markdownRemark?.frontmatter?.title!} />
      <main>
        <h2>{data.markdownRemark?.frontmatter?.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html! }} />
      </main>
    </Layout>
  );
}

export const query = graphql`
  query PageTemplateData($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
