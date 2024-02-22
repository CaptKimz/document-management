import { ConfigProvider } from "antd";
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { configAll } from "../../components/theme/themConfig" 
// Define the shape of the auth object
type Theme = {
  theme: string;
  fontSize?: string
  // You can add other properties as needed
};

// Create a type for the AuthContext value
type ThemeContextValue = {
  themeConfig: Theme;
  setThemeConfig: Dispatch<SetStateAction<Theme>>;
};

const getItemFromLocalStorage = (param: string) => {
  try {
    return JSON.parse(localStorage.getItem(param) || '');
  } catch (error) {
    return null;
  }
};

// Create an initial value for the AuthContext
const themeData = getItemFromLocalStorage("themeData")
const initialTheme: Theme = {
  theme: themeData?.theme || "light",
  fontSize: themeData?.fontSize || "",
};

// Create the AuthContext
const ThemeContext = createContext<ThemeContextValue>({
  themeConfig: initialTheme,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setThemeConfig: () => { },
});

interface ThemeProviderProps {
  children?: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeConfig, setThemeConfig] = useState<Theme>(initialTheme);
  return (
    <ThemeContext.Provider value={{ themeConfig, setThemeConfig }}>
      <ConfigProvider theme={configAll(themeConfig.theme)}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
