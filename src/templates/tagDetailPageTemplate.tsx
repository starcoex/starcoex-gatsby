import React from "react";
import Layout from "../components/Layout";
import { graphql, PageProps } from "gatsby";

interface ITagDetailPageTemplateDataProps {
  tag: string;
  data: Queries.TagDetailPageTemplateDataQuery;
}

export default function TagDetailPageTemplate({ data }: ITagDetailPageTemplateDataProps) {
  return (
    <Layout pageTitle="TagDetail">
      <div>Tag</div>
    </Layout>
  );
}
export const query = graphql`
  query TagDetailPageTemplateData($tag: String) {
    allMdx(limit: 2000, sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;

// export const query = graphql`;
//   query TagDetailPageTemplateData {
//     allMdx {
//       totalCount
//       edges {
//         node {
//           frontmatter {
//             slug
//             tags
//             title
//           }
//         }
//       }
//     }
//   }
// `;
