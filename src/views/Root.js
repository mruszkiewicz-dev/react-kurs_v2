import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Note from 'views/Note';
import Article from 'views/Article';
import Twitter from 'views/Twitter';
import DetailsPage from 'views/DetailsPage';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Routes>
        <Route path="/notes" element={<Note />} />\
        <Route path="/notes/:id" element={<DetailsPage />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/articles/:id" element={<DetailsPage />} />
        <Route path="/twitters" element={<Twitter />} />
        <Route path="/twitters/:id" element={<DetailsPage />} />
        <Route path="/" element={<Navigate to="/notes" replace />} />
      </Routes>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
