import * as React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import Hero from "../components/Hero";
import BlogPostCard from "../components/BlogPostCard";
import PageNavigation from "../components/PageNavigation";

interface IHomeProps extends PageProps {
  data: Queries.BlogListQuery;
  pageContext: {
    limit: number;
    skip: number;
    numPages: number;
    currentPage: number;
  };
}

const Home = ({ data, pageContext }: IHomeProps) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <main>
        <PageNavigation currentPage={pageContext.currentPage} numPages={pageContext.numPages} />
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
    </Layout>
  );
};

export default Home;

export const Head: HeadFC = () => <Seo title="Home Page" />;

export const indexQuery = graphql`
  query BlogList($limit: Int = 10, $skip: Int = 10) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: { eq: "post" }, published: { eq: true } } }
      sort: { frontmatter: { date: DESC } }
    ) {
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
