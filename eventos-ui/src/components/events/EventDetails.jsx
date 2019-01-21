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

class EventDetails extends Component {
    state = {
        modalAddGuest: false,
        modalConfirm: false,
        dropdownTables: false
    }

    toggleModalAddGuest = () => {
        this.setState({
            modalAddGuest: !this.state.modalAddGuest
        });
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

    render() {
        if (this.props.eventInfo !== '') {
            return (
                <Card>
                    <CardHeader className="event_header_card">
                        <h5 className="card-title">Boda de John Duo y Alexa Res</h5>
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
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText > <FontAwesomeIcon icon="search" /> </InputGroupText>
                                            <Input placeholder="Buscar invitado" size="sm" />
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                                <div className="guest_add">
                                    <Button size="sm" onClick={this.toggleModalAddGuest} className="float-sm-right" color="primary">
                                        Agregar Invitado <FontAwesomeIcon icon="plus-circle" />
                                    </Button>
                                    {/* Modal Add Guest */}
                                    <Modal
                                        size="lg"
                                        isOpen={this.state.modalAddGuest}
                                        toggle={this.toggleModalAddGuest}
                                        className={this.props.className}>
                                        <ModalHeader toggle={this.toggleModalAddGuest}>Agregar Invitado</ModalHeader>
                                        <ModalBody>
                                            <div className="form_create_event">
                                                <Form>
                                                    <FormGroup>
                                                        <Label for="eventName">Nombre del Invitado</Label>
                                                        <Input type="text" maxLength="16" name="name" id="eventName" placeholder="Max. 16 caracteres" />
                                                    </FormGroup>
                                                    <Row form>
                                                        <Col md={4}>
                                                            <FormGroup>
                                                                <Label for="noGuest">Numero de Acompañantes</Label>
                                                                <Input placeholder="Max. 10 personas" type="number" name="noGuest" id="noGuest" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={3}>
                                                            <Label for="total">Total de Invitados</Label>
                                                            <InputGroup>
                                                                <InputGroupAddon addonType="prepend">
                                                                    <InputGroupText>
                                                                        <FontAwesomeIcon icon="users" />
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input id="total" disabled placeholder={this.state.currentUserMail} />
                                                            </InputGroup>
                                                        </Col>
                                                        <Col md={5}>
                                                            <Label for="table">Mesa Asignada</Label>
                                                            <InputGroup>
                                                                <InputGroupAddon addonType="prepend">
                                                                    <InputGroupText>
                                                                        5 Disponibles
                                                                        </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input type="select" name="table" id="table">
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                </Input>
                                                            </InputGroup>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </div>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" onClick={this.toggleModalAddGuest}>Añadir Invitado</Button>{' '}
                                            <Button color="secondary" onClick={this.toggleModalAddGuest}>Cancelar</Button>
                                        </ModalFooter>
                                    </Modal>
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
            );
        } else {
            return (<h1>Nell perro</h1>);
        }

    }
}

export default EventDetails;