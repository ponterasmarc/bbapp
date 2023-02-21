import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/globalStyles";
import { GlobalResetStyles } from "@/styles/globalResetStyles";
import { lightTheme, darkTheme } from "@/styles/theme";
import Head from "next/head";
import Layout from "components/layout";
import Sidebar from "@/components/sidebar";
import { MainWrap } from "@/components/layout/styled";
import BrightnessAutoIcon from "@mui/icons-material/BrightnessAuto";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function App({ Component, pageProps }) {
  const [signedIn, setSignedIn] = useState(true);
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
      console.log(darkThemeMq);
      if (darkThemeMq.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  const TheHead = () => {
    return (
      <Head>
        <title>bbapp</title>
      </Head>
    );
  };

  return (
    <>
      <TheHead />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalResetStyles />
        <GlobalStyles />
        {signedIn === true ? (
          <>
            <Layout>
              <Sidebar theme={theme}>
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
              </Sidebar>
              <MainWrap>
                <Component {...pageProps} />
              </MainWrap>
            </Layout>
          </>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
      {/* <TheHead />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalResetStyles />
        <GlobalStyles />
        <Layout>
          <Sidebar theme={theme}>
            <input type="checkbox" onChange={themeToggler} checked={checked} />
          </Sidebar>
          <MainWrap>
            <Component {...pageProps} />
          </MainWrap>
        </Layout>
      </ThemeProvider> */}
    </>
  );
}
