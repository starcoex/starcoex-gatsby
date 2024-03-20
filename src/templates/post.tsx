import { graphql } from "gatsby";
import React from "react";

export default function BlogPostTemplate(props) {
  const post = props.data.mdx?.frontmatter?.title;
  return (
    <div>
      <h1>Hello</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}

export const query = graphql`
  query BlogPostTemplateMdxId($id: String) {
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
