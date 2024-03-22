import { graphql, useStaticQuery } from "gatsby";

export function useSiteConfigQuery() {
  const data = useStaticQuery<Queries.ConfigQuery>(graphql`
    query Config {
      markdownRemark(frontmatter: { type: { eq: "config" } }) {
        frontmatter {
          menu {
            id
            name
            link
          }
          logo {
            publicURL
          }
        }
      }
    }
  `);
  return data;
}
