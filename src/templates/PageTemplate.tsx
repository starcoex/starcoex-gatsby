import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { graphql, PageProps } from "gatsby";
import { Image } from "../styles/Image.styles";

interface IPageTemplateProps {
  data: Queries.PostTemplateDataQuery;
  // image: IGatsbyImageData;
}

export default function PageTemplate({ data }: IPageTemplateProps) {
  return (
    <Layout pageTitle={data.markdownRemark?.frontmatter?.title!}>
      <Seo title={data.markdownRemark?.frontmatter?.title!} />
      <Image
        image={data.markdownRemark?.frontmatter?.image?.childImageSharp?.gatsbyImageData!}
        alt={data.markdownRemark?.frontmatter?.title!}
      />
      <main>
        <h2>{data.markdownRemark?.frontmatter?.title}</h2>
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      </main>
    </Layout>
  );
}

export const query = graphql`
  query PageTemplateData($id: String) {
    markdownRemark(id: { eq: $id }) {
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
