import * as React from "react";
import type { GatsbySSR } from "gatsby";
import Layout from "./src/components/layout";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
  return (
    <Layout pageTitle="Ssr">
      <h1>Hello World</h1>
      {element}
    </Layout>
  );
};
