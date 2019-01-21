import React, { Component } from 'react';

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

class EventList extends Component {
    state = {
        modalCreateEvent: false,
    }

    toggleModalCreateEvent = () => {
        this.setState({
            modalCreateEvent: !this.state.modalCreateEvent
        });
    }
    
    render() {
        return (
            <div className="list_container">
                <Card>
                    <CardHeader className="clearfix">
                        <h5 className="card-title">
                            Lista de Eventos
                            <Button onClick={this.toggleModalCreateEvent} className="float-sm-right" color="primary">
                                Crear Evento <FontAwesomeIcon icon="plus-circle" />
                            </Button>
                            {/* Modal Create Event */}
                            <Modal
                                isOpen={this.state.modalCreateEvent}
                                toggle={this.toggleModalCreateEvent}
                                className={this.props.className}>
                                <ModalHeader toggle={this.toggleModalCreateEvent}>Crea Evento</ModalHeader>
                                <ModalBody>
                                    <div className="form_create_event">
                                        <Form>
                                            <FormGroup>
                                                <Label for="eventName">Nombre del Evento</Label>
                                                <Input type="text" name="name" id="eventName" placeholder="Reunion, Fiesta, Boda..." />
                                            </FormGroup>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="noTables">Numero de Mesas</Label>
                                                        <Input type="number" name="tables" id="noTables" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="spaces">Espacios por Mesa</Label>
                                                        <Input type="select" name="spaces" id="spaces">
                                                            <option>8</option>
                                                            <option>10</option>
                                                            <option>12</option>
                                                            <option>14</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Form>

                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleModalCreateEvent}>Crear Evento</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleModalCreateEvent}>Cancelar</Button>
                                </ModalFooter>
                            </Modal>
                        </h5>
                    </CardHeader>
                    <CardBody className="card_body_events">
                        {/* List of Events */}
                        <Card className="card_event">
                            <CardBody className="event_grid">
                                <div className="event_icon"><FontAwesomeIcon icon="users" /></div>
                                <div className="event_details">
                                    <h5 className="card-title">Boda de John Duo y Alexa Res</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Disponibles: 100 - Confirmados: 40 - Invitados: 4</h6>
                                </div>
                                <div className="event_tools">
                                    <Button color="info">
                                        <FontAwesomeIcon icon="arrow-right" />
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="card_event">
                            <CardBody className="event_grid">
                                <div className="event_icon"><FontAwesomeIcon icon="users" /></div>
                                <div className="event_details">
                                    <h5 className="card-title">Boda de John Duo y Alexa Res</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Disponibles: 100 - Confirmados: 40 - Invitados: 4</h6>
                                </div>
                                <div className="event_tools">
                                    <Button color="info">
                                        <FontAwesomeIcon icon="arrow-right" />
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </CardBody>
                    <CardFooter>Footer</CardFooter>
                </Card>
            </div>
        )
    }
}

export default EventList;
