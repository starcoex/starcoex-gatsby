import React from "react";
import type { GatsbyBrowser } from "gatsby";
import ModeProvider from "./src/components/context/ModeProvider";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  return <ModeProvider>{element}</ModeProvider>;
};
