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
    }

    createEvent = (name, tables, spaces) => {
        this.storage.createEvent(name, tables, spaces);
    }

    render() {
        // const { currentUserMail, currentUserName } = this.state;
        return (
            < div className="event_dashboard" >
                <EventList 
                    events={this.storage.getEventsList()} 
                    createEvent={this.createEvent}/>
                <EventDetails />
            </div >
        )
    }
}

export default Events;
