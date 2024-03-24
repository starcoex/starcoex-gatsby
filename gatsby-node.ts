import type { GatsbyNode } from "gatsby";
import path from "path";
import { createFilePath } from "gatsby-source-filesystem";
import { title } from "process";

interface IAllMarkdownRemarkProps {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          date: Date;
          slug: string;
          title: string;
          published: string;
        };
      };
    }[];
  };
}

// export const sourceNodes: GatsbyNode["sourceNodes"] = async ({ actions, createNodeId, createContentDigest }) => {
//   const { createNode } = actions;
// };

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content`,
    });
    console.log(slug);
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/PostTemplate.tsx`);
  const result = await graphql(`
    query loadPagesQuery {
      posts: allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
        edges {
          node {
            frontmatter {
              published
              slug
              title
              date
            }
          }
        }
      }
      pages: allMarkdownRemark(filter: { frontmatter: { type: { eq: "page" } } }) {
        edges {
          node {
            frontmatter {
              slug
              title
              date
            }
          }
        }
      }
    }
  `);
  // if (result.errors || !result.data) {
  //   reporter.panicOnBuild(`Error while running GraphQL query.`);
  //   return;
  // }

  console.log(result);
  result.data?.posts.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      path: `${edge.node.frontmatter?.slug}`,
      component: postTemplate,
      context: {
        title: edge.node.frontmatter?.title,
      },
    });
  });
};
