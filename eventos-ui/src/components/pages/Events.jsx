import React, { Component } from 'react';
import './Events.css';

import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardHeader, CardFooter, Button,
    InputGroup, InputGroupText, InputGroupAddon, Input
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                <Card>
                    <CardHeader className="clearfix">
                        <h5 className="card-title">Lista de Eventos <Button className="float-sm-right" color="primary">
                            Crear Evento
                                <FontAwesomeIcon icon="plus-circle" />
                        </Button></h5>
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
                <Card>
                    <CardHeader> <h5 className="card-title">Boda de John Duo y Alexa Res</h5> </CardHeader>
                    <CardBody className="details_grid">
                        <Card>
                            <CardBody className="status_grid">
                                <div className="status_item">
                                    <FontAwesomeIcon icon="list-alt" />
                                    <p className="text-muted span_event">100 Espacios Disponibles</p>
                                </div>
                                <div className="status_item">
                                    <FontAwesomeIcon icon="user-check" />
                                    <p className="text-muted span_event">100 Invitados Confirmados</p>
                                </div>
                                <div className="status_item">
                                    <FontAwesomeIcon icon="user-circle" />
                                    <p className="text-muted span_event">100 Invitados en Espera</p>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="guest_container">
                            <CardHeader className="guest_header">
                                <div className="guest_finder">
                                    <InputGroup>
                                        <Input />
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText> <FontAwesomeIcon icon="search" /> </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                                <div className="guest_add">
                                    <Button className="float-sm-right" color="primary">
                                        Agregar Invitado <FontAwesomeIcon icon="plus-circle" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardBody className="guest_list" >
                                {/* GuestList */}
                                <div className="guest_list_header">
                                    <div>Nombre: </div>
                                    <div>Mesa: </div>
                                    <div>Invitados: </div>
                                    <div>Editar/Eliminar: </div>
                                </div>
                                <div className="guest_list_container">
                                    <Card className="guest_card">
                                        <div className="guest_title">Raúl E. Reza</div>
                                        <div className="guest_tables">3</div>
                                        <div className="guest_subguest">14</div>
                                        <div className="guest_tools">
                                            <Button size="sm" color="warning"> <FontAwesomeIcon icon="edit" /> </Button>
                                            <Button size="sm" color="danger"> <FontAwesomeIcon icon="trash" /> </Button>
                                        </div>
                                    </Card>
                                </div>
                            </CardBody>
                        </Card>
                    </CardBody>
                    <CardFooter>
                        <h6 className="card-subtitle mb-2 text-muted">No. de Mesas: 14 - Espacios por Mesa: 10</h6>
                    </CardFooter>
                </Card>
            </div >
        )
    }
}

export default Events;
