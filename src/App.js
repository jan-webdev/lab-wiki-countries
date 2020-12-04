import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from "react-router-dom";
import countries from './countries.json';

function App() {
  console.log("this is app.js and this is countries: ", countries)
  console.log("app.js, Japan:", countries[116].capital[0]);
  return (
    
    <div className="App">
      <Navbar />
      {/* Switch will only render one route, the first route that matches the path 
          - withour it the Notfound component would be rendered everytime*/}
          <div className="container">
  <div className="row">
    <div className="col-4">
      <CountriesList countries={countries} />
    </div>
    <div className="col-8">
      <CountryDetails />
    </div>
  </div>
  </div>
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} /> */}
        {/* <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDetail} />
        <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;

