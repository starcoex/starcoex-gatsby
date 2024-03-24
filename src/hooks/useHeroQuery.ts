import { graphql, useStaticQuery } from "gatsby";

export function useHeroQuery() {
  const data = useStaticQuery<Queries.HeroDataQuery>(graphql`
    query HeroData {
      markdownRemark(frontmatter: { type: { eq: "hero" } }) {
        frontmatter {
          heroImageText
          heroImageBtnText
          heroImageBtnLink
          heroImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  return data;
}
