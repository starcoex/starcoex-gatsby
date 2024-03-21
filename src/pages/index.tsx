import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/SEO";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="고정훈 블로그에 오신걸 환영합니다.">
      <p>지금부터 시작합니다. 개츠비 튜토리얼을....</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home Page" />;
