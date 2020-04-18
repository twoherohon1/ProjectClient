import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Store from './components/Store';
import User from './components/User'
import Sick from './components/Sickness'
import Editadmin from './components/Editadmin';
import Editsick from './components/Editsick';

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/login"
            component={LoginForm}
            exact={true}
          />
           <Route
            path="/home"
            component={Home}
            exact={true}
          />
         
            <Route
            path="/editcargo"
            component={Store}
            exact={true}
          />
          <Route
            path="/storeuser"
            component={User}
            exact={true}
          />
           <Route
            path="/sick"
            component={Sick}
            exact={true}
          />
          <Route
            path="/admin"
            component={Editadmin}
            exact={true}
          />
          <Route
            path="/editsick"
            component={Editsick}
            exact={true}
          />
        </Switch>
      </BrowserRouter>
  )
}
export default App

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Login/>
//       </div>
//     )
//   }
// }

// export default App
