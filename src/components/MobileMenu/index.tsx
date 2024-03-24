import { Link } from "gatsby";
import React from "react";

import { OverrideGlobalStyle, Wrapper, Nav } from "../../styles/MobileMenu.styles";

interface IMobileMenuProps {
  data: Queries.ConfigQuery;
  menuOpen: boolean;
}

export default function MobileMenu({ data, menuOpen }: IMobileMenuProps) {
  return (
    <>
      <OverrideGlobalStyle menuOpen={menuOpen} />
      <Wrapper menuOpen={menuOpen}>
        <Nav>
          {data.markdownRemark?.frontmatter?.menu?.map((item) => (
            <li key={item?.id}>
              <Link to={item?.link!} activeClassName="active">
                {item?.name}
              </Link>
            </li>
          ))}
        </Nav>
      </Wrapper>
    </>
  );
}
