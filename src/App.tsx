import "./App.css";

import * as React from "react";

import { Button } from "./Button";
import { CardList, ICardProp } from "./card";
import { InputForm } from "./input-form";
import logo from "./logo.svg";

export interface IAppState {
  counter: number;
  cards: ICardProp[];
}

class App extends React.Component<any, IAppState> {
  public state: IAppState = {
    cards: [
    ],
    counter: 0,
  };

  public incrementCounter = (incrementBy: number) => {
    this.setState((prevState) => ({ counter: prevState.counter + incrementBy }));
  }

  public addNewCard = (cardInfo: ICardProp) => {
    // tslint:disable-next-line:no-console
    console.log(cardInfo);
    this.setState(state => ({ cards: [...state.cards, cardInfo] }));
  }

  public render() {
    return (
      <div className="App">
        <div style={{ visibility: "hidden" }}>
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

        <CardList cards={this.state.cards} />
        <InputForm onSuccess={this.addNewCard} />
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
