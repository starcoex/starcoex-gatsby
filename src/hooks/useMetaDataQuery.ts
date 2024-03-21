import { graphql, useStaticQuery } from "gatsby";

export function useMetaDataQuery() {
  const data = useStaticQuery<Queries.SeoQuery>(graphql`
    query Seo {
      site(siteMetadata: {}) {
        siteMetadata {
          title
          siteUrl
          description
          author
        }
      }
    }
  `);
  return data;
}
