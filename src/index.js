import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Web3Provider } from './context/web3-context';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <ScrollToTop>
        <Web3Provider>
          <App />
        </Web3Provider>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
