import { PageProps, graphql, useStaticQuery } from "gatsby";
import React from "react";

interface ISeoProps {
  title: string;
}
export default function Seo({ title }: ISeoProps) {
  const data = useStaticQuery<Queries.SeoQuery>(graphql`
    query Seo {
      site(siteMetadata: {}) {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  );
}
