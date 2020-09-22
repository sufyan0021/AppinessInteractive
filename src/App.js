import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login';
import EmployeeList from './Employee/EmployeeList';
import PrivateRoute  from "./routes/PrivateRoute";
import {Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <PrivateRoute exact path='/EmployeeList' component={EmployeeList}></PrivateRoute>
          <Route exact path='/login' component={Login}></Route>
        </div>
    </BrowserRouter>
  );
}

export default App;
