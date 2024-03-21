import React from "react";
import type { GatsbyBrowser } from "gatsby";
import Layout from "./src/components/layout";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  return (
    <Layout pageTitle="Bro">
      <h1>Hello</h1>
      {element}
    </Layout>
  );
};
