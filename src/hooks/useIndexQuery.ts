import { graphql, PageProps } from "gatsby";
import { indexQuery } from "../pages/index";

export function useIndexQuery() {
  const IndexData = graphql`
    query BlogList {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }, sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            fields {
              readingTime {
                text
              }
            }
            frontmatter {
              date
              slug
              title
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `;
  return IndexData;
}
