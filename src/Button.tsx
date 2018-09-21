import * as React from "react";

export interface IButtonProps {
    suffix?: string;
    incrementBy?: number;
    onClickFunction: (incrementBy: number) => any;
}

export class Button extends React.Component<IButtonProps> {    
    public render() {
        return (
            <button onClick={this.handleClick}>Increment {this.props.suffix}</button>
        );
    }

    private handleClick = () => {
        this.props.onClickFunction(this.props.incrementBy || 1);
    };
}
