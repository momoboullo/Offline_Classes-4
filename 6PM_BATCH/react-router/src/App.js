import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Footer from  './components/Footer';
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/services' component={Services}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
            <Footer/>
        </div>
    </Router>
  );
}

export default App;
