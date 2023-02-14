import "@/styles/globals.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/components/globalStyles";
import { lightTheme, darkTheme } from "@/components/theme";
import { Switch, FormControlLabel } from "@mui/material/";
import Head from "next/head";
import Layout from "components/layout";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const TheHead = () => {
    return (
      <Head>
        <title>bbapp</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
    );
  };

  return (
    <>
      {" "}
      <TheHead />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Dark mode"
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
