import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { Provider } from 'react-redux';
import Note from 'views/Note';
import Article from 'views/Article';
import Twitter from 'views/Twitter';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'Routes/index';
import store from 'store/index';
import LoginPage from 'views/LoginPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.notes} element={<Note />} />

          <Route path={routes.note} element={<DetailsPage />} />
          <Route path={routes.articles} element={<Article />} />
          <Route path={routes.article} element={<DetailsPage />} />
          <Route path={routes.twitters} element={<Twitter />} />
          <Route path={routes.twitter} element={<DetailsPage />} />
          <Route path={routes.home} element={<Navigate to="/notes" replace />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
