import { Button, Typography } from "antd";
import useTheme from "../hooks/useTheme";


export default function HomePage(){
  const { setThemeConfig,themeConfig } = useTheme();
  return (
    <>
    <Typography>HomePage</Typography>
    <Button onClick={()=>setThemeConfig((prev)=>({...prev,theme:prev.theme==="light"?"dark":"light"}))}></Button>
    </>
  )
}