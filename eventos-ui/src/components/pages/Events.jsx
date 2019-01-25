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
            currentUserMail: '',
            eventInfo: '',
            list: []
        };
    }

    componentWillMount() {
        this.getEventsList();
    }

    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserMail: idToken.idToken.claims.email,
            currentUserName: idToken.idToken.claims.name
        });
    }

    getEventsList = () => {
        let initList = this.storage.getEventsList();
        this.setState({ list: initList });
    }

    sendEventInfo = (event) => {
        this.setState({ eventInfo: event })
    }

    createEvent = (name, tables, spaces) => {
        this.storage.createEvent(name, tables, spaces);
    }

    createGuest = (newGuest) => {
        this.storage.createGuest(
            {
                id: 0,
                n_spaces: 10,
                name: "Boda de la Tia",
                tables: 8,
            },
            'Nombre',
            5,
            4
        );
        this.getEventsList();
    }

    render() {
        // const { currentUserMail, currentUserName } = this.state;
        return (
            < div className="event_dashboard" >
                <EventList
                    events={this.state.list}
                    createEvent={this.createEvent}
                    eventInfo={this.sendEventInfo} />
                <EventDetails
                    create={this.createGuest}
                    eventInfo={this.state.eventInfo} />
            </div >
        )
    }
}

export default Events;
