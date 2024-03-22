import React, { Dispatch, SetStateAction } from "react";

interface IToggleModeProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ToggleMode({ menuOpen, setMenuOpen }: IToggleModeProps) {
  return (
    <div>
      <div />
    </div>
  );
}
