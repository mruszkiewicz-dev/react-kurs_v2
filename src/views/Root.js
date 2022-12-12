import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import MainTemplate from 'templates/MainTemplate';
import Note from 'views/Note';
import Article from 'views/Article';
import Twitter from 'views/Twitter';
import Sidebar from 'components/organism/Sidebar/Sidebar';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Note />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/twitters" element={<Twitter />} />
      </Routes>
      <Button secondary>remove</Button>
      <Sidebar />
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
