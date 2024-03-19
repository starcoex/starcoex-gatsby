import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";

interface ILayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

export default function Layout({ pageTitle, children }: ILayoutProps) {
  const data = useStaticQuery<Queries.SeoQuery>(graphql`
    query Seo {
      site(siteMetadata: {}) {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  return (
    <div className={container}>
      <header className={siteTitle}>{data.site?.siteMetadata?.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}
