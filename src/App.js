import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/HomePage';
import Details from './Pages/DetailsPage';
import Page404 from './Pages/Page404';

function App() {
  return (
    <div className = "App">
		<Switch>
			  <Route exact path = "/" component = {Home} />
        <Route exact path = "/movie/:id" component = {Details} />
        <Route component = {Page404} />
		</Switch>
    </div>
  );
}

export default App;
