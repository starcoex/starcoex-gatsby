import type { GatsbyNode } from "gatsby";
import path from "path";

type Person = {
  id: number;
  name: string;
  age: number;
};

export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  console.log(createPage);
};
