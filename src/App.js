import React from 'react';

import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";

import store from "./store/store";
import Routes from "./router/Routes";

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
