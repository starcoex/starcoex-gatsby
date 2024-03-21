import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link, PageProps } from "gatsby";
import { link } from "fs";

export default function TagsPage({ data }: PageProps<Queries.TagsDataQuery>) {
  return (
    <Layout pageTitle="Tags">
      <h1>tags</h1>
      <ul>
        {data.allMdx.group.map((tag, index) => (
          <li key={index}>
            <Link to={tag.fieldValue!}>
              <small>{tag.totalCount}</small>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query TagsData {
    allMdx(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
