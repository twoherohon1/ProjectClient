import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';

import Store from './components/Store';



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
            path="/store"
            component={Store}
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
