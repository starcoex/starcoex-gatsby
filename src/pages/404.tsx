import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <h1>Not Found</h1>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
