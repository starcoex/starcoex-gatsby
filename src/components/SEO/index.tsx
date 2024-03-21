import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery";

interface ISeoProps {
  title: string;
}
export default function Seo({ title }: ISeoProps) {
  const data = useMetaDataQuery();
  // const data = useStaticQuery<Queries.SeoQuery>(graphql`
  //   query Seo {
  //     site {
  //       siteMetadata {
  //         title
  //         siteUrl
  //         description
  //         author
  //       }
  //     }
  //   }
  // `);
  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  );
}
