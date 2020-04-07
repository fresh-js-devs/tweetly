import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PostDetail from './pages/PostDetail/PostDetail';
import MainPage from './pages/MainPage/MainPage';


export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact = {true} path="/" component={MainPage} />
            <Route path='/tweet' component={PostDetail} />
        </Switch>
    </BrowserRouter>
);