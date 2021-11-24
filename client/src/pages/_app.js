import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../app/store";
import { useReduxHydrate } from "next-redux-hydrate";
import { Font } from "../styles/Font";
import { theme } from "../styles/theme";
import { Header } from "../components/navigation/Header";
import { Box } from "../components/Box";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: "Montserrat", sans-serif;
  }

  body {
    background-color: #1a1a1a;
  }
`;

const Main = styled(Box)`
  // Have a padding here to make sure the content is not covered by the header
  padding-top: 70px;
`;

export const MyApp = ({ Component, pageProps }) => {
  useReduxHydrate({ store });

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Font />
        <GlobalStyle />
        <Header />
        <Main component="main">
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default MyApp;
