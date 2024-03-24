import React, { Dispatch, SetStateAction } from "react";
import { ToggleIcon } from "../../styles/ToggleIcon.styles";
import { collectSlices } from "gatsby/dist/utils/babel/find-slices";

interface IToggleModeProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ToggleMode({ menuOpen, setMenuOpen }: IToggleModeProps) {
  return (
    <ToggleIcon role="button" menuOpen={menuOpen} onClick={() => setMenuOpen((prev) => !prev)}>
      <div />
      {/* <div /> */}
    </ToggleIcon>
  );
}
