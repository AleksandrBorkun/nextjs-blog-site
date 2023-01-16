import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "../components/Header";
import { useState } from "react";

const basePallete = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
};
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  ...basePallete,
});

const ligthTheme = createTheme({ ...basePallete });

export default function App({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const onThemeChanged = (isDark) =>
    setCurrentTheme(isDark ? darkTheme : ligthTheme);
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Header onThemeChanged={onThemeChanged} isDark />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
