import "@/styles/globals.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/globalStyles";
import { GlobalResetStyles } from "@/styles/globalResetStyles";
import { lightTheme, darkTheme } from "@/styles/theme";
import Head from "next/head";
import Layout from "components/layout";
import Sidebar from "@/components/sidebar";
import { MainWrap } from "@/components/layout/styled";

export default function App({ Component, pageProps }) {
  const [signedIn, setSignedIn] = useState(false);
  const [theme, setTheme] = useState("light");
  const [checked, setChecked] = useState(false);
  const themeToggler = () => {
    if (theme === "light") {
      setTheme("dark");
      setChecked(true);
    } else {
      setTheme("light");
      setChecked(false);
    }
  };

  const TheHead = () => {
    return (
      <Head>
        <title>bbapp</title>
      </Head>
    );
  };
  console.log(signedIn);

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
                <input
                  type="checkbox"
                  onChange={themeToggler}
                  checked={checked}
                />
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
