import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArtistRoute from "./components/artist-route";
import ListenerRoute from "./components/listener-route";

//Pages
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ArtistProfilePage from "./pages/artist/ArtistProfilePage";
import CreateAlbumSongPage from "./pages/artist/CreateAlbumSongPage";
import ListenerPage from "./pages/listener/ListenerPage";
import LogoutPage from "./pages/logout/LogoutPage";
import SearchPage from "./pages/song/SearchPage";
import GenrePage from "./pages/song/GenrePage";
import ArtistPage from "./pages/artist/ArtistPage";
import AlbumPage from "./pages/album/AlbumPage";

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
        <Route path="/album/:id" component={AlbumPage} />
        <Route path="/artist/:id" component={ArtistPage} />
        <ArtistRoute
          path="/artistProfile/create"
          component={CreateAlbumSongPage}
        />
        <ArtistRoute path="/artistProfile" component={ArtistProfilePage} />
        <ListenerRoute path="/listener" component={ListenerPage} />
        <ListenerRoute path="/search/:key" component={SearchPage} />
        <ListenerRoute path="/search/" component={SearchPage} />
        <ListenerRoute path="/genre/:genreName" component={GenrePage} />
        <Route path="/logout">
          <LogoutPage></LogoutPage>
        </Route>
        <Route path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
