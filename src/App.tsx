import Footer from 'components/Footer';
import Home from 'pages/Home';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
