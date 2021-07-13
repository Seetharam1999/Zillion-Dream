import React from 'react';
import logo from './ZD.jpg';
import Contact from './Components/ContactComponents/Contact_Components';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Home=()=>{
  return( <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <div>
      <p style={{color:"#712C18"}}>
        This Page is under Proccessing...
      </p>
    </div>
    </header>
   
</div>);
}
const App=(props)=> {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Contact" component={()=><Contact username="SRS"/>}/>
        <Route path="/user"/>
        <Route path="/notification"/>
        <Route path="/dreamComunity"/>
        <Route path="/settings"/>
      
      </Switch>
    </Router>
   
  );
}

export default App;
