import React, { useState } from "react";

type ModeProviderType = [darkMode: boolean, setDarkMode: React.Dispatch<React.SetStateAction<boolean>>];

export const ModeContext = React.createContext<ModeProviderType>([] as unknown as ModeProviderType);

interface IModeProviderProps {
  children: React.ReactNode;
}

export default function ModeProvider({ children }: IModeProviderProps) {
  const [darkMode, setDarkMode] = useState(true);
  return <ModeContext.Provider value={[darkMode, setDarkMode]}>{children}</ModeContext.Provider>;
}
