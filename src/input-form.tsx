import axios from "axios";
import * as React from "react";
import { ICardProp } from "./card";

export interface IInputFormProps {
    onSuccess: (result: ICardProp) => void;
}

export class InputForm extends React.Component<IInputFormProps, any> {
    public state = {
        userName: ""
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Github username" 
                    required={true} 
                    value={this.state.userName}
                    onChange={this.handleChange}
                    // ref={(input) => this.userNameInput = input as HTMLInputElement }
                    />
                <button type="submit">Add card</button>
            </form>
        );
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // event.preventDefault();
        this.setState({ userName: event.target.value });        
        // tslint:disable-next-line:no-console        
        console.log("got here " + this.state.userName);
    };

    private handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // tslint:disable-next-line:no-console
        console.log("got " + this.state.userName);
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(result => {
                // tslint:disable-next-line:no-console
                this.props.onSuccess(result.data);
                this.setState({ userName: "" });
            });
    };
}
