import React from "react";
import { User } from "../model/Model";
import { AuthService } from "../services/AuthService";
import LoginWithNavigate from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Spaces } from "./spaces/Spaces";
import { DataService } from "../services/DataService";
interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: undefined,
    };
    this.setUser = this.setUser.bind(this);
  }

  private authService: AuthService = new AuthService();
  private dataService: DataService = new DataService();
  private setUser(user: User) {
    this.setState({ user: user });
    console.log("setting the user!: " + user);
  }

  render() {
    return (
      <div className="wrapper">
        <Router>
          <div>
            <Navbar user={this.state.user} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={
                  <LoginWithNavigate
                    authService={this.authService}
                    setUser={this.setUser}
                  />
                }
              ></Route>
              <Route
                path="/profile"
                element={
                  <Profile
                    user={this.state.user}
                    authService={this.authService}
                  />
                }
              />
              <Route
                path="/spaces"
                element={<Spaces dataService={this.dataService} />}
              />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
