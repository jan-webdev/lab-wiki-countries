import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

export default class CountriesList extends Component {
    render() {
        console.log("countrieslistjs. countries: ", this.props.countries);
        return (
            <div>
                {this.props.countries.map(country => {
                    console.log("countryyyy ",country)
                    return <div><p>{country.name.official}</p></div>                 
                })
                }
                {/* Switch will only render one route, the first route that matches the path 
          - withour it the Notfound component would be rendered everytime*/}
                {/*<Switch>
                     <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} /> */}
                    {/* <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDetail} />
        <Route component={NotFound} />
                </Switch> */}
            </div>
        )
    }
}
