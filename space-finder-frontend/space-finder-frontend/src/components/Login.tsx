import React, { SyntheticEvent } from "react";
import { AuthService } from "../services/AuthService";
import { User } from "../model/Model";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  authService: AuthService;
  setUser: (user: User) => void;
  navigate: (path: string) => void; // Keep this in props
}

interface LoginState {
  userName: string;
  password: string;
  loginAttempted: boolean;
  loginSuccessfull: boolean;
}

interface CustomEvent {
  target: HTMLInputElement;
}

export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: "",
    password: "",
    loginAttempted: false,
    loginSuccessfull: false,
  };

  private setUserName(event: CustomEvent) {
    this.setState({ userName: event.target.value });
  }
  private setPassword(event: CustomEvent) {
    this.setState({ password: event.target.value });
  }

  private async handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    this.setState({ loginAttempted: true });
    const result = await this.props.authService.login(
      this.state.userName,
      this.state.password
    );
    if (result) {
      this.setState({ loginSuccessfull: true });
      this.props.setUser(result);
      this.props.navigate("/profile"); // Corrected here
    } else {
      this.setState({ loginSuccessfull: false });
    }
  }

  render() {
    let loginMessage: any;
    if (this.state.loginAttempted) {
      if (this.state.loginSuccessfull) {
        loginMessage = <label>Login Successful</label>;
      } else {
        loginMessage = <label>Login failed</label>;
      }
    }
    return (
      <div>
        <h2>Please Login</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            value={this.state.userName}
            onChange={(e) => this.setUserName(e)}
          />
          <br />
          <input
            value={this.state.password}
            type="password"
            onChange={(e) => this.setPassword(e)}
          />
          <br />
          <input type="submit" value="Login" />
        </form>
        {loginMessage}
      </div>
    );
  }
}

const LoginWithNavigate = (props: any) => {
  const navigate = useNavigate();
  return <Login {...props} navigate={navigate} />;
};

export default LoginWithNavigate;
