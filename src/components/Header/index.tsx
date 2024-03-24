import React, { useContext, useState } from "react";
import Layout from "../Layout";
import { useSiteConfigQuery } from "../../hooks/useSiteConfigQuery";
import { Link } from "gatsby";
import { Logo, Wrapper } from "../../styles/Header.styles";
import Menu from "../Menu";
import ToggleMode from "../ToggleMode";
import MobileMenu from "../MobileMenu";
import { ModeContext } from "../context/ModeProvider";
import ModeButton from "../ModeButton";

interface IHeaderProps {
  siteTitle: string;
}

export default function Header({ siteTitle }: IHeaderProps) {
  const data = useSiteConfigQuery();
  const [darkMode, setDarkMode] = useContext(ModeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Wrapper>
      <ToggleMode menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} data={data} />
      <Menu data={data} />
      <Link to="/">
        <Logo src={data.markdownRemark?.frontmatter?.logo?.publicURL!} alt={siteTitle} />
      </Link>
      <div>Mode Button</div>
      <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </Wrapper>
  );
}
