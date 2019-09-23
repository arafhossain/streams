import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

let PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">Navigate to Page Two</Link>
    </div>
  )
}

let PageTwo = () => {
  return (
    <div>
      PageTwo
      <Link to="/">Navigate to Page One</Link>
    </div>
  )}

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