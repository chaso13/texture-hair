import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import CustomNavbar from './components/CustomNavbar';
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
			<div>
				<CustomNavbar/>
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
