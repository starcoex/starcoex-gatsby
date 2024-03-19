import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IBlogPostProps {
  data: Queries.BlogPostMdxIdQuery;
  children: React.ReactNode;
}
export default function BlogPost({ data, children }: IBlogPostProps) {
  console.log(data.mdx?.frontmatter?.hero_image_alt);
  const image = getImage(data.mdx?.frontmatter?.hero_image!);
  console.log(image);
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

export function Head() {
  return <Seo title="Super Blog" />;
}

export const query = graphql`
  query BlogPostMdxId($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
