import { Link } from "gatsby";
import { title } from "process";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

export default function About() {
  return (
    <Layout pageTitle="About">
      <p>안녕! 나는 고정훈이라는 사람이라</p>
    </Layout>
  );
}
export function Head() {
  return <Seo title="About Me" />;
}
