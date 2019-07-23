import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Login from "./pages/login/login"
import Admin from "./pages/admin/layout"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/login"  ></Redirect>
                <Route path="/login" component={Login} ></Route>
                <Route path="/admin" component={Admin} ></Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
