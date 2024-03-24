import * as React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/SEO";
import Hero from "../components/Hero";
import BlogPostCard from "../components/BlogPostCard";
import { HeroWrapper } from "../styles/Hero.styles";
import styled from "styled-components";

// interface IBlogListProps {
//   data: Queries.BlogListQuery;
// }

const IndexPage = ({ data }: PageProps<Queries.BlogListQuery>) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <main>
        <BlogPostCard />
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
            readingTime {
              text
            }
          }
          frontmatter {
            date
            slug
            title
            image {
              childrenImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;
