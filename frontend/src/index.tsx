import { SnackbarProvider } from 'notistack';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <SnackbarProvider maxSnack={4}>
    <App />
  </SnackbarProvider>,
  document.getElementById('root'),
);
