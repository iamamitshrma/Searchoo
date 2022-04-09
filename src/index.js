import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ResultContextProvider } from './contexts/ResultContextProvider';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ResultContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </ResultContextProvider>
);
