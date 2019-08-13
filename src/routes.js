import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './pages/Main/Main';
import LoginPage from './pages/Login/Login';

export default function Router() {
    return (
        <BrowserRouter>
            <Route path="/" component={LoginPage} exact />
            <Route path="/main" component={MainPage} />
        </BrowserRouter>
    );
}
