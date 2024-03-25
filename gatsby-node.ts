import type { GatsbyNode, PageProps } from "gatsby";
import path from "path";
import { createFilePath } from "gatsby-source-filesystem";

interface IAllMarkdownRemarkProps {
  posts: {
    edges: {
      node: {
        frontmatter: {
          published: boolean;
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
  pages: {
    edges: {
      node: {
        fields: {
          slug: string;
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
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/PostTemplate.tsx`);
  const pageTemplate = path.resolve(`./src/templates/PageTemplate.tsx`);
  const home = path.resolve(`./src/templates/Home.tsx`);
  const result = await graphql<Queries.loadPagesQueryQuery>(`
    query loadPagesQuery {
      posts: allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
        edges {
          node {
            frontmatter {
              published
            }
            fields {
              slug
            }
          }
        }
      }
      pages: allMarkdownRemark(filter: { frontmatter: { type: { eq: "page" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors || !result.data) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const allPosts = result.data.posts.edges;
  const allPages = result.data.pages.edges;

  allPosts.forEach((node) => {
    if (node.node.frontmatter?.published) {
      createPage({
        path: `${node.node.fields?.slug}`,
        component: postTemplate,
        context: {
          slug: node.node.fields?.slug,
        },
      });
    }
  });

  allPages.forEach((node) => {
    createPage({
      path: `${node.node.fields?.slug}`,
      component: pageTemplate,
      context: {
        slug: node.node.fields?.slug,
      },
    });
  });

  const postsPerPage = 5;
  const numPages = Math.ceil(allPosts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/` : `/${index + 1}`,
      component: home,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    });
  });
};
