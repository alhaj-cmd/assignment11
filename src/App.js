import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Addproduct from './Components/Dashboard/Addproduct/Addproduct';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';


export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState([])
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addproduct">
            <Addproduct/>
          </Route>
          <Route path="/Dashboard">
            <Dashboard/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
        </Router>
        </userContext.Provider>
   
  );
}

export default App;
