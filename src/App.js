import React from 'react';
import 'normalize.css';
import './App.css';
import Navbar from './Navbar';
import Commercial from './Commercial';
import Marcom from './Marcom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Route path="/commercial" exact component={Commercial}/>
          <Route path="/marcom" exact component={Marcom}/>
      </Router>
    </div>
  );
}

export default App;
