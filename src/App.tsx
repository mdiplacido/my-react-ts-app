import * as React from 'react';
import './App.css';

import { Button } from './Button';
import logo from './logo.svg';

export interface IAppState {
  counter: number;
}

class App extends React.Component<any, IAppState> {
  public state: IAppState = {
    counter: 0
  };

  public incrementCounter = (incrementBy: number) => {
    this.setState((prevState) => ({ counter: prevState.counter + incrementBy }));
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button suffix="testing" onClickFunction={this.incrementCounter} incrementBy={2} />
        <Summary count={this.state.counter} />
      </div>
    );
  }
}

const Summary = (props: { count: number }) => {
  return (
    <div>
      Current count: {props.count}
    </div>
  );
};

export default App;
