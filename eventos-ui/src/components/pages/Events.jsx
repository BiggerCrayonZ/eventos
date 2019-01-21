import React, { Component } from 'react';
import './Events.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Components */
import EventList from '../events/EventList';
import EventDetails from '../events/EventDetails';

/* Constants */
import StorageFunctions from '../../functions/StorageFunctions';


class Events extends Component {
    storage = new StorageFunctions;
    eventsArray = [];
    constructor(props) {
        super(props);
        this.state = {
            currentUserName: '',
            currentUserMail: ''
        };
    }

    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserMail: idToken.idToken.claims.email,
            currentUserName: idToken.idToken.claims.name
        });
        this.storage.createEvent('Junta de Congreso', 8, 8);

    }

    render() {
        // const { currentUserMail, currentUserName } = this.state;
        return (
            < div className="event_dashboard" >
                <EventList events={this.storage.getEventsList()} />
                <EventDetails />
            </div >
        )
    }
}

export default Events;
