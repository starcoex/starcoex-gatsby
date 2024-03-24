import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "../../styles/GlobalStyles";
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery";
import Header from "../Header";
import { ModeContext } from "../context/ModeProvider";

interface ILayoutProps {
  pageTitle?: string;
  children: React.ReactNode;
}

export default function Layout({ pageTitle, children }: ILayoutProps) {
  const data = useMetaDataQuery();
  const [darkMode] = useContext(ModeContext);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header siteTitle={data.site?.siteMetadata?.title!} />
      {children}
    </ThemeProvider>
  );
}
