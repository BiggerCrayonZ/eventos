import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class AlertComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }

    onDismiss = () => {
        this.setState({ visible: false })
    }

    render() {
        return (
            <div>
                <Alert
                    color={this.props.color}
                    isOpen={this.state.visible}
                    toggle={this.onDismiss}>
                    {this.props.text}
                </Alert>
            </div>
        );
    }
}

export default AlertComponent;