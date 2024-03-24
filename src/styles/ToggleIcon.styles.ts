import styled from "styled-components";

interface Props {
  menuOpen: boolean;
}

export const ToggleIcon = styled.div<Props>`
  display: block;
  width: 30px;
  z-index: 1000;
  cursor: pointer;

  ::after,
  ::before,
  div {
    background-color: ${(props) => props.theme.colors.textDark};
    border-radius: 2px;
    content: "";
    display: block;
    height: 5px;
    margin: 5px 0;
    transition: all 0.2s ease-in-out;
  }
  ::before {
    transform: ${(props) => (props.menuOpen ? "translateY(-10px) rotate(45deg)" : "")};
  }
  ::after {
    transform: ${(props) => (props.menuOpen ? "translateY(-20px) rotate(-45deg)" : "")};
  }

  div {
    transform: ${(props) => (props.menuOpen ? "scale(1)" : "")};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
