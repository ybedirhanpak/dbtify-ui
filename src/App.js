import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArtistRoute from "./components/artist-route";
import ListenerRoute from "./components/listener-route";

//Pages
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ArtistPage from "./pages/artist/ArtistPage";
import CreatePage from "./pages/artist/CreatePage";
import ListenerPage from "./pages/listener/ListenerPage";
import LogoutPage from "./pages/logout/LogoutPage";
import SearchPage from "./pages/listener/SearchPage";
import GenrePage from "./pages/listener/GenrePage";

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
        <ArtistRoute path="/artist/create" component={CreatePage} />
        <ArtistRoute path="/artist" component={ArtistPage} />
        <ListenerRoute path="/listener" component={ListenerPage} />
        <ListenerRoute path="/search/:key" component={SearchPage} />
        <ListenerRoute path="/genre/:genreName" component={GenrePage} />
        <Route path="/logout">
          <LogoutPage></LogoutPage>
        </Route>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
