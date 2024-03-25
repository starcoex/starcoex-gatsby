import React from "react";
import LeftIcon from "../../images/arrow-left.svg";
import RightIcon from "../../images/arrow-right.svg";
import { Current, ImgWrapper, PageNavigationWrapper } from "../../styles/PageNavigation.styles";
import { Link } from "gatsby";

interface IPageNavigationProps {
  currentPage: number;
  numPages: number;
}

export default function PageNavigation({ currentPage, numPages }: IPageNavigationProps) {
  return (
    <PageNavigationWrapper>
      <ImgWrapper>
        {currentPage > 1 && (
          <Link to={`/${currentPage === 2 ? "" : currentPage - 1}`}>
            <input type="image" alt="left-nav" src={LeftIcon} />
          </Link>
        )}
      </ImgWrapper>
      <Current>
        <p>
          {currentPage} / {numPages}
        </p>
      </Current>
      <ImgWrapper>
        {currentPage !== numPages && (
          <Link to={`/${currentPage + 1}`}>
            <input type="image" alt="right-nav" src={RightIcon} />
          </Link>
        )}
      </ImgWrapper>
    </PageNavigationWrapper>
  );
}
