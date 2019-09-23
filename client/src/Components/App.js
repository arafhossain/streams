import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';



let App = () => {
  return (
    <div>
      <BrowserRouter></BrowserRouter>
    </div>
  );
};

export default App;
