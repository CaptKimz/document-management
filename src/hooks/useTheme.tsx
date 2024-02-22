import { useContext } from "react";
import {ThemeContext} from "../utils/context/ThemeProvider.tsx";

const useTheme = () => {
    return useContext(ThemeContext);
}

export default useTheme;