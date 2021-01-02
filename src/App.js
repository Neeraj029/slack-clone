import { React } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <Router>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <h1>Welcome brooooooooooooooo!</h1>
              </Route>
            </Switch>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
