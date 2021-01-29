import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './navbar';
import Home from './views/home/home';
import About from './views/about/about';
import { DataMining } from './views/datamining';
import { DataMigration } from './views/datamigration';
import { MicroServices } from './views/microservices';
import BusinessRule from './views/businessrule/businessrule';
import { Services } from './views/services';
import Interprise from './views/interprise/interprise';
import { WebDevelopment } from './views/webdevelopment';
// import { It } from './views/it';
import DocumentConversion from './views/documentconversion/documentconversion';
import { DataTransformation } from './views/datatransformation';
import {Contact} from './views/contact';
import Portfolio from './views/portfolio/portfolio';
export const Routes = () => {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/'>
                    <Redirect to='/home' />
                </Route>
                <Route exact path='/about' component={About} />
                <Route exact path='/datamining' component={DataMining} />
                <Route exact path='/datamigration' component={DataMigration} />
                <Route exact path='/microservices' component={MicroServices} />
                <Route exact path='/businessrule' component={BusinessRule} />
                <Route exact path='/services' component={Services} />
                <Route exact path='/enterprise' component={Interprise} />
                <Route exact path='/webdevelopment' component={WebDevelopment} />
                {/* <Route exact path='/it' component={It} /> */}
                <Route exact path='/document' component={DocumentConversion} />
                <Route exact path='/datatransformation' component={DataTransformation} />
                <Route exact path='/portfolio' component={Portfolio} />
                <Route exact path='/contact' component={Contact} />
            </Switch>
        </div>
    );
}
