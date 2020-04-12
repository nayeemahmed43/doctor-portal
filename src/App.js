import React from 'react';
import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from './component/Appointment/Appointment';
import PatientDetails from './component/PatientDetails/PatientDetails';
import Info from './component/Info';
import Review from './component/Review/Review';
import Dashboard from './component/Dashboard/Dashboard';
import Patients from './component/Patients/Patients';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>

            <Route path="/patientdetails/:key1/:key2/:key3">
              <PatientDetails></PatientDetails>
            </Route>

            <Route path="/review">
              <Review></Review>
            </Route>

            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <Route path="/patients">
              <Patients></Patients>
            </Route>

            <Route path="/info">
              <Info></Info>
            </Route>

          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
