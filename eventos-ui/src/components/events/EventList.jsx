import React, { Component } from 'react';

import {
    Card, CardBody, CardHeader, CardFooter, Button,
    Modal, ModalHeader, ModalBody, ModalFooter, Label
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Components */

import CreateEvent from './forms/CreateEvent';

class EventList extends Component {
    state = {
        eventName: '',
        eventTables: 0,
        eventSpaces: 8,
        eventFree: 0,
        modalCreateEvent: false,
    }

    toggleModalCreateEvent = () => {
        this.setState({
            modalCreateEvent: !this.state.modalCreateEvent
        });
    }

    handleNameField = (value) => {
        this.setState({ eventName: value })
    }

    handleTablesField = (value) => {
        this.setState({ eventTables: value })
    }

    handleSpacesField = (value) => {
        this.setState({ eventSpaces: value })
    }

    callCreateEvent = () => {
        this.props.createEvent(this.state.eventName, this.state.eventTables, this.state.eventSpaces);
        this.toggleModalCreateEvent();
    }

    callEventInfo = (event) => {
        this.props.eventInfo(event);
    }

    renderEventList = () => {
        let array = [];
        for (let i = 0; i < this.props.events.length; i++) {
            let element = this.props.events[i];
            let free = ((element.n_spaces * element.tables) - element.confirm);
            array.push(
                <Card key={i} className="card_event">
                    <CardBody className="event_grid">
                        <div className="event_icon"><FontAwesomeIcon icon="users" /></div>
                        <div className="event_details">
                            <h5 className="card-title">{element.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Disponibles: {free}
                                - Confirmados: {element.confirm}
                                - Invitados en espera: {element.guest.length}
                            </h6>
                        </div>
                        <div className="event_tools">
                            <Button onClick={this.callEventInfo.bind(null, element)} color="info">
                                <FontAwesomeIcon icon="arrow-right" />
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            )
        }
        return array;
    }

    render() {
        return (
            <div className="list_container">
                <Card>
                    <CardHeader className="clearfix">
                        <h5 className="card-title generic_title">
                            Lista de Eventos
                            <Button onClick={this.toggleModalCreateEvent} className="float-sm-right" color="primary">
                                Crear Evento <FontAwesomeIcon icon="plus-circle" />
                            </Button>
                            {/* Modal Create Event */}
                            <Modal
                                isOpen={this.state.modalCreateEvent}
                                toggle={this.toggleModalCreateEvent}
                                className={this.props.className}>
                                <ModalHeader toggle={this.toggleModalCreateEvent}>Crea Evento: </ModalHeader>
                                <ModalBody>
                                    <div className="form_create_event">
                                        {/* Create Event form */}
                                        <CreateEvent
                                            changeName={this.handleNameField}
                                            changeTables={this.handleTablesField}
                                            changeSpaces={this.handleSpacesField} />
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <div className="create_modal_footer">
                                        <Label className="float-sm-right" >Espacios Disponibles: {this.state.eventTables * this.state.eventSpaces}</Label>
                                        <div className="button_section">
                                            <Button className="float-sm-right" color="secondary" onClick={this.toggleModalCreateEvent}>Cancelar</Button>
                                            {(this.state.eventName.length) && (this.state.eventTables * this.state.eventSpaces) > 0 ? <Button className="float-sm-right" color="primary" onClick={this.callCreateEvent}>Crear Evento</Button> : null}
                                        </div>
                                    </div>
                                </ModalFooter>
                            </Modal>
                        </h5>
                    </CardHeader>
                    <CardBody className="card_body_events">
                        {/* List of Events */}
                        {this.renderEventList()}
                    </CardBody>
                    <CardFooter>{this.props.events.length} Eventos Disponibles</CardFooter>
                </Card>
            </div>
        )
    }
}

export default EventList;
