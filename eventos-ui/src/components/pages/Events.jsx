import React, { Component } from 'react';
import './Events.css';

import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardHeader, CardFooter, Button,
    InputGroup, InputGroupText, InputGroupAddon, Input,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Col, Row, CustomInput,
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    ListGroup, ListGroupItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Components */
import EventList from '../events/EventList';
import EventDetails from '../events/EventDetails';


class Events extends Component {
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
            < div className="event_dashboard" >
                <EventList />
                <EventDetails />
            </div >
        )
    }
}

export default Events;
