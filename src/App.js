import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ArtistPage from "./pages/artist/ArtistPage";
import CreatePage from "./pages/artist/CreatePage";

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/register">
          <RegisterPage></RegisterPage>
        </Route>
        <Route path="/artist/create">
          <CreatePage></CreatePage>
        </Route>
        <Route path="/artist">
          <ArtistPage></ArtistPage>
        </Route>
        <Route path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
