import React, { Component } from 'react';

import {
    Card, CardBody,
    CardHeader, CardFooter, Button,
    InputGroup, InputGroupText, InputGroupAddon, Input,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Col, Row,
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    ListGroup, ListGroupItem
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Components */
import StatusComponent from './templates/StatusComponent';
import GuestComponent from './templates/GuestComponent';

class EventDetails extends Component {
    state = {
        modalConfirm: false,
        dropdownTables: false
    }

    toggleModalConfirm = () => {
        this.setState({
            modalConfirm: !this.state.modalConfirm
        });
    }

    toggleDropdownTables = () => {
        this.setState({
            dropdownTables: !this.state.dropdownTables
        });
    }

    createEvent = (newGuest) => {
        this.props.create(newGuest);
    }

    render() {
        if (this.props.eventInfo !== '') {
            return (
                <Card>
                    <CardHeader className="event_header_card">
                        <h5 className="card-title generic_title">{this.props.eventInfo.name}</h5>
                        <Button onClick={this.toggleModalConfirm} outline color="primary">Confirmar Cita</Button>
                        {/* Modal Confirm Guest */}
                        <Modal
                            size="lg"
                            isOpen={this.state.modalConfirm}
                            toggle={this.toggleModalConfirm}
                            className={this.props.className}>
                            <ModalHeader toggle={this.toggleModalConfirm}>Confirmar Invitados</ModalHeader>
                            <ModalBody>
                                <div className="confirm_event_container">
                                    <div className="confirm_event_tools">
                                        <ButtonDropdown className="float-sm-left" isOpen={this.state.dropdownTables} toggle={this.toggleDropdownTables}>
                                            <DropdownToggle caret size="sm">
                                                Mesa
                                                </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>1</DropdownItem>
                                                <DropdownItem>2</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                    <div className="confirm_event_report">
                                        <div className="confirm_guest_list">
                                            <Card className="confirm_guest_list_card">
                                                <CardHeader> <h5 className="card-title">Invitados</h5></CardHeader>
                                                <CardBody>
                                                    <div className="confirm_header_list">
                                                        <div className="header_item">Nombre:</div>
                                                        <div className="header_item">Mesa:</div>
                                                        <div className="header_item">Confirmación:</div>
                                                    </div>
                                                    <Card className="confirm_guest_item">
                                                        <div className="confirm_guest_item_title">Raúl Reza</div>
                                                        <div className="confirm_guest_item_table">3</div>
                                                        <Button size="sm" outline color="success">Add</Button>
                                                    </Card>
                                                </CardBody>
                                            </Card>
                                        </div>
                                        <div className="confirm_table_report">
                                            <Card className="confirm_table_report_card">
                                                <CardHeader> <h5 className="card-title">Información de la mesa: 1</h5></CardHeader>
                                                <CardBody className="confirm_table_report_grid">
                                                    <Card className="confirm_table_details">
                                                        <div className="confirm_table_details_item">Nombre:</div>
                                                        <div className="confirm_table_details_item">Confirmados 3 de 15</div>
                                                    </Card>
                                                    <Card className="confirm_table_guest_report">
                                                        <ListGroup>
                                                            <ListGroupItem>Cras justo odio</ListGroupItem>
                                                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                                            <ListGroupItem>Morbi leo risus</ListGroupItem>
                                                            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                                                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                                        </ListGroup>
                                                    </Card>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                        </Modal>
                    </CardHeader>
                    <CardBody className="details_grid">
                        <StatusComponent event={this.props.eventInfo} />
                        <GuestComponent
                            create={this.createEvent}
                            event={this.props.eventInfo} />
                    </CardBody>
                    <CardFooter>
                        <h6 className="card-subtitle mb-2 text-muted">
                            No. de Mesas: {this.props.eventInfo.tables} -
                            Espacios por Mesa: {this.props.eventInfo.n_spaces}
                        </h6>
                    </CardFooter>
                </Card>
            );
        } else {
            return (<h1>Nell perro</h1>);
        }

    }
}

export default EventDetails;