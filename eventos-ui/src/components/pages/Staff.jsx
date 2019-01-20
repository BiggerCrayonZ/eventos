import React, { Component } from 'react'

class Staff extends Component {
    state = {
        currentUserName: '',
        currentUserMail: ''
    }

    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserMail: idToken.idToken.claims.email,
            currentUserName: idToken.idToken.claims.name
        });
    }

    render() {
        const { currentUserMail, currentUserName } = this.state;
        return (
            <div>
                <h1>Welcome {currentUserName}</h1>
                <p>Email: {currentUserMail}</p>
            </div>
        )
    }
}

export default Staff;
