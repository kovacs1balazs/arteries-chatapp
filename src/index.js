import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Chat from './components/Chat';
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

