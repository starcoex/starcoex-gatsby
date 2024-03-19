import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Link, PageProps, graphql } from "gatsby";

export default function BlogPage({
  data,
}: PageProps<Queries.BlogMdxDataQuery>) {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={node.frontmatter?.slug!}>{node.frontmatter?.title}</Link>
          </h2>
          <p>{node.frontmatter?.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
      {/* <div>Welcome blog</div>
      <ul>
        {data.allFile.nodes.map((node, index) => (
          <li key={index}>{node.name}</li>
        ))}
      </ul> */}
    </Layout>
  );
}

export function Head() {
  return <Seo title="Blog" />;
}

// export const query = graphql`
//   query BlogData {
//     allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
//       nodes {
//         name
//       }
//     }
//   }
// `;

export const query = graphql`
  query BlogMdxData {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
        parent {
          ... on File {
            id
            name
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`;
