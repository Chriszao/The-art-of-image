import Footer from 'components/Footer';
import Home from 'pages/Home';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastContainer newestOnTop position="bottom-left" />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
