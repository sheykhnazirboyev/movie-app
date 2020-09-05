import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/HomePage';
import Details from './Pages/DetailsPage';

function App() {
  return (
    <div className = "App">
		<Switch>
			  <Route exact path = "/" component = {Home} />
        <Route exact path = "/movie/:id" component = {Details} />
		</Switch>
    </div>
  );
}

export default App;
