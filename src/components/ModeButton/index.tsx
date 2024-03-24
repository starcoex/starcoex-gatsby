import React from "react";
import DayIcon from "../../images/daymode.svg";
import NightIcon from "../../images/nightmode.svg";
import { ImgButton } from "../../styles/ModeButton.styles";
import { darkTheme } from "../../styles/GlobalStyles";

interface IModeButton {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModeButton({ darkMode, setDarkMode }: IModeButton) {
  return <ImgButton src={darkMode ? NightIcon : DayIcon} alt="mode" onClick={() => setDarkMode((prev) => !prev)} />;
}
