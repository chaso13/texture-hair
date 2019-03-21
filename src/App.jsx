import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
        	<Router>
			<div>
				<Navbar/>
        
				<Route exact path="/"component={Home}/>
        <Footer/>
			</div>
		</Router>
      
    );
  }
}

export default App;
