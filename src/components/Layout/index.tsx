import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { ThemeProvider } from "styled-components";
// import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle } from "./layout.module.css";
import { GlobalStyles, darkTheme, lightTheme } from "../../styles/GlobalStyles";
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery";

interface ILayoutProps {
  pageTitle?: string;
  children: React.ReactNode;
}

export default function Layout({ pageTitle, children }: ILayoutProps) {
  // const data = useStaticQuery<Queries.SeoQuery>(graphql`
  //   query Seo {
  //     site(siteMetadata: {}) {
  //       siteMetadata {
  //         title
  //         description
  //         siteUrl
  //       }
  //     }
  //   }
  // `);
  const data = useMetaDataQuery();
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <div>
        <header>{data.site?.siteMetadata?.title}</header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">blog</Link>
            </li>
            <li>
              <Link to="/posts">posts</Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
