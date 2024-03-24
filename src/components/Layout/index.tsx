import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme } from "../../styles/GlobalStyles";
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery";
import Header from "../Header";

interface ILayoutProps {
  pageTitle?: string;
  children: React.ReactNode;
}

export default function Layout({ pageTitle, children }: ILayoutProps) {
  const data = useMetaDataQuery();
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header siteTitle={data.site?.siteMetadata?.title!} />
      {children}
    </ThemeProvider>
  );
}
