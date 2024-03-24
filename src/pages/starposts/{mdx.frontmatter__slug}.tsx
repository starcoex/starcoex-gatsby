import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

interface IPostDetailProps {
  data: Queries.BlogPostMdxIdQuery;
  children: React.ReactNode;
}

export default function PostDetailPage({ data, children }: IPostDetailProps) {
  const image = data.mdx?.frontmatter?.hero_image?.childImageSharp?.gatsbyImageData;

  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title!}>
      <p>{data.mdx?.frontmatter?.date}</p>
      <GatsbyImage image={image!} alt={data.mdx?.frontmatter?.hero_image_alt!} />
      <p>
        Photo Credit:{" "}
        <Link to={data.mdx?.frontmatter?.hero_image_credit_link!}>{data.mdx?.frontmatter?.hero_image_credit_text}</Link>
      </p>
      {children}
    </Layout>
  );
}

export const query = graphql`
  query PostDetailMdxId($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
