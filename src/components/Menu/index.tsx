import { Link } from "gatsby";
import React from "react";
import { Nav } from "../../styles/Menu.styles";

interface IMenuProps {
  data: Queries.ConfigQuery;
}

export default function Menu({ data }: IMenuProps) {
  return (
    <Nav>
      {data.markdownRemark?.frontmatter?.menu?.map((item) => (
        <li key={item?.id}>
          <Link to={item?.link!} activeClassName="active">
            {item?.name}
          </Link>
        </li>
      ))}
    </Nav>
  );
}
