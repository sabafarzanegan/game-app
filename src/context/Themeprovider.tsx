import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "./../hooks/useLocal";

export const AppContext = createContext<theme>({} as theme);

type TChidren = {
  children: React.ReactNode;
};
type theme = {
  theme: string;
  setTheme: () => string;
};

export const useTheme = () => {
  return useContext(AppContext);
};

export function AppProvider({ children }: TChidren) {
  const [theme, setTheme] = useLocalStorage("light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.toggle("dark", theme === "dark");
    const body = document.querySelector("body");
    body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}>
      {children}
    </AppContext.Provider>
  );
}
