import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Events.css';

/* Components */
import EventList from '../events/EventList';
import EventDetails from '../events/EventDetails';
import AlertComponent from '../events/templates/AlertComponent';

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
            list: [],
            alert: false,
            color: 'success',
            text: '',
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
        let flag = this.storage.createGuest(newGuest);
        if (flag) {
            this.setState({
                alert: true,
                color: 'warning',
                text: 'Error al agregar al usuario, contacta al administrador.'
            })
        } else {
            this.setState({
                alert: true,
                color: 'success',
                text: 'Invitado agregado, recuerda confirmar su asistencia.'
            })
        }
        this.getEventsList();
    }

    render() {
        // const { currentUserMail, currentUserName } = this.state;
        return (
            <div>
                {this.state.alert ?
                    <AlertComponent
                        color={this.state.color}
                        text={this.state.text} /> : null}
                < div className="event_dashboard" >
                    <EventList
                        events={this.props.list}
                        createEvent={this.createEvent}
                        eventInfo={this.sendEventInfo} />
                    <EventDetails
                        create={this.createGuest}
                        eventInfo={this.state.eventInfo} />
                </div >
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list: state.events
})

export default connect(mapStateToProps)(Events)

