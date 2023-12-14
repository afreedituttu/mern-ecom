import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { DarkModeContextProvider } from "./context/darkModeContext";
import {Provider} from 'react-redux';
import {store, persistor} from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
     <DarkModeContextProvider>
        <App />
     </DarkModeContextProvider>
    </BrowserRouter>
    </PersistGate>
    </Provider>
, document.getElementById('root'));