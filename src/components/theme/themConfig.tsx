import type { ThemeConfig } from 'antd';
import { theme } from 'antd';
const darkConfig: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
  },
};

const lightConfig: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
  },
};

export const configAll = (theme: string) => {  
  switch (theme) {
    case "dark":
      return darkConfig
    default:
      return lightConfig
  }
}