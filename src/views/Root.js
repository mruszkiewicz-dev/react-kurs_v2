import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Note from 'views/Note';
import Article from 'views/Article';
import Twitter from 'views/Twitter';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Note />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/twitters" element={<Twitter />} />
      </Routes>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
