import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter
} from "react-router-dom";
import {AppRouter} from './router/AppRouter';

import './styles.css'
import { UserProvider } from './context/UserProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
        <BrowserRouter>
        <AppRouter/>
        </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
)
