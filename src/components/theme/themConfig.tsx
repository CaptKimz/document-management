import type { ThemeConfig } from 'antd';
import { theme } from 'antd';
const { darkAlgorithm, compactAlgorithm } = theme;

type Token=ThemeConfig["token"]

const darkFunc=(token:Token)=>{
  const darkConfig: ThemeConfig = {
    algorithm: [darkAlgorithm,compactAlgorithm],
    token: {
      ...token
    },
  };
  return darkConfig
}


const lightFunc=(token:Token)=>{
  const lightConfig: ThemeConfig = {
    algorithm: [compactAlgorithm],
    token: {
      ...token
    },
    components:{
      Layout:{
        siderBg:"white",
        headerBg:"white",
        colorIcon:"black"
      },
      Button:{
        colorText:"black"
      }
    }
    
  };
  
  return lightConfig
}

export const configAll = (theme: string,token?:Token) => {  
  switch (theme) {
    case "dark":
      return darkFunc(token)
    default:
      return lightFunc(token)
  }
}