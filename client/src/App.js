import "./app.scss";
import React, { useContext } from "react";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Mylist from "./pages/mylist/Mylist";
import Usersettings from "./pages/usersettings/Usersettings";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  // Remember react-router-dom v6  switch replaced with routes   :(
  // Remember react-router-dom v6 redirect replaced with Navigate
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        <Route
          exact
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          exact
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <>
          <Route
            exact
            path="/movies"
            element={user ? <Home type="movie" /> : <Navigate to="/register" />}
          />
          <Route
            exact
            path="/series"
            element={
              user ? <Home type="series" /> : <Navigate to="/register" />
            }
          />
          <Route
            exact
            path="/watch"
            element={user ? <Watch /> : <Navigate to="/register" />}
          />
          <Route
            exact
            path="/mylist"
            element={user ? <Mylist /> : <Navigate to="/register" />}
          />
          <Route
            exact
            path="/settings"
            element={user ? <Usersettings /> : <Navigate to="/register" />}
          />

        </>
      </Routes>
    </Router>
  );
};

export default App;
