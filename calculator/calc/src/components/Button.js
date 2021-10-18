import React, { Component } from 'react';

class Button extends Component{
    render() {
        return (
            <div className={`column-${this.props.cols}`}>
                <button class="button-1" onClick={ () => this.props.action(this.props.tag)}>{this.props.tag}</button>
            </div>
        )
    }
}

export default Button;