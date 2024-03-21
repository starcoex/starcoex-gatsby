import React from "react";
import { Link, PageProps, graphql } from "gatsby";
export default function Info({ data }: PageProps<Queries.MetaDataQuery>) {
  console.log(data);
  return (
    <div>
      <h1>{data.site?.siteMetadata?.title}</h1>
      <h1>{data.site?.siteMetadata?.siteUrl}</h1>
      <h1>{data.site?.siteMetadata?.description}</h1>
      <Link to="/">To Main</Link>
    </div>
  );
}

export const metadataQuery = graphql`
  query MetaData {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
