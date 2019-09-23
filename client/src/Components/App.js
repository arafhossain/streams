import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

let PageOne = () => {
  return <div>PageOne</div>;
}

let PageTwo = () => {
  return <div>PageTwo</div>;
}

let App = () => {
  return (
    <div>
    <BrowserRouter>
      <Route path="/" exact component={PageOne} />
      <Route path="/pagetwo" component={PageTwo} />
    </BrowserRouter>
    </div>
    );
};

export default App;