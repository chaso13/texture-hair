import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import CustomNavbar from './components/CustomNavbar';


class App extends Component {
  render() {
    return (
    <Router>
			<div>
				<CustomNavbar/>
				<Redirect from="/" to="/home"/>
				<Switch>
					<Route exact path="/home"component={Home}/>
					<Route path="/features"component={Features}/>
					<Route path ="/pricing"component={Pricing}/>
				</Switch> 
        <Footer/>
			</div>
		</Router>
      
    );
  }
}

export default App;
