import * as React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import Hero from "../components/Hero";
import BlogPostCard from "../components/BlogPostCard";

// interface IBlogListProps {
//   data: Queries.BlogListQuery;
// }

const IndexPage = ({ data }: { data: Queries.BlogListQuery }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <main>
        {posts.map(({ node }, index) => {
          const title = node.frontmatter?.title;
          return (
            <BlogPostCard
              key={index}
              slug={node.fields?.slug!}
              title={title!}
              date={node.frontmatter?.date!}
              readingTime={node.fields?.readingTime?.text!}
              excerpt={node.excerpt!}
              image={node.frontmatter?.image?.childImageSharp?.gatsbyImageData!}
            />
          );
        })}
      </main>
      {/* <p>지금부터 시작합니다. 개츠비 튜토리얼을....</p> */}
      {/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      /> */}
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home Page" />;

export const indexQuery = graphql`
  query BlogList {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }, sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date
            slug
            title
            image {
              childImageSharp {
                gatsbyImageData(height: 200, width: 200)
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;
