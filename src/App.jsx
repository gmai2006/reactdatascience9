import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About/About';
import DataMining from './pages/Services/DataMining';
import DataMigration from './pages/Services/DataMigration';
import DataTransformation from './pages/Services/DataTransformation';
import DocumentConversion from './pages/Services/DocumentConversion';
import WebDevelopment from './pages/Services/WebDevelopment';
import Enterprise from './pages/Services/Enterprise';
import Microservices from './pages/Products/Microservices';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Blogs from './pages/Blogs/Blogs';
import EditorTable from './pages/Editor/Editor';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <NavigationBar />
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/services/datamining' component={DataMining} />
            <Route path='/services/datamigration' component={DataMigration} />
            <Route path='/services/datatransformation' component={DataTransformation} />
            <Route path='/services/documentconversion' component={DocumentConversion} />
            <Route path='/services/webdevelopment' component={WebDevelopment} />
            <Route path='/services/enterprise' component={Enterprise} />
            <Route path='/products/microservices' component={Microservices} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
            <Route path='/blogs' component={Blogs} />
            <Route path='/editor' component={EditorTable} />
          </Switch>
          <Footer />
      </Router>
    </>
  )
}

export default App;
