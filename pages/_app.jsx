import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/globalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalResetStyles } from "@/styles/globalResetStyles";
import { lightTheme, darkTheme } from "@/styles/theme";
import ThemeSwitch from "@/components/utils/themeSwitch";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { SessionProvider } from "next-auth/react";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const themeToggler = (value) => {
    if (value === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      if (darkThemeMq.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalResetStyles />
            <GlobalStyles />

            {/* to be transfer */}
            <ThemeSwitch>
              <button
                className={theme === "light" ? "active" : ""}
                onClick={() => themeToggler("light")}
              >
                <span>Light</span>
                <LightModeIcon />
              </button>
              <button
                className={theme === "dark" ? "active" : ""}
                onClick={() => themeToggler("dark")}
              >
                <span>Dark</span>
                <DarkModeIcon />
              </button>
            </ThemeSwitch>
            {/* --------------------- */}

            <Component {...pageProps} />
          </ThemeProvider>
        </SessionProvider>
      </Provider>
    </>
  );
}
