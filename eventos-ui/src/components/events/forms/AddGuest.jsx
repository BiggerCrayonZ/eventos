import React, { Component } from 'react';

import {
    InputGroup, InputGroupText, InputGroupAddon, Input,
    Form, FormGroup, Label, Col, Row
} from 'reactstrap';

class AddGuest extends Component {

    getEmptySpaces = (table) => {
        let spaceLimit = this.state.event.n_spaces;
        let spaceSum = 0;
        for (let i = 0; i < this.state.event.guest.length; i++) {
            const element = this.state.event.guest[i];
            if (element.assign_tables === parseInt(table)) {
                spaceSum = spaceSum + element.n_guest;
            }
        }
        const res = (spaceLimit - spaceSum);
        return (res);
    }

    renderTablesAsigned = () => {
        let array = [];
        for (let i = 0; i <= this.props.event.tables; i++) {
            array.push(<option key={i}>{i}</option>);
        }
        return array;
    }

    // componentWillMount() {
    //     const empty = this.getEmptySpaces(1);
    //     this.setState({ tableEmptySpaces: empty });
    // }

    evaluateForm = () => {
        if (this.state.name.length > 0 && this.state.total > 0 && this.state.tableEmptySpaces > 0) {
            if (this.evaluateSpaces()) {
                this.props.flag(true);
            } else {
                this.props.flag(false);
            }
        } else {
            this.props.flag(false);
        }
    }

    evaluateSpaces = () => {
        if (this.state.tableEmptySpaces >= this.state.total) {
            return true;
        } else { return false; }
    }

    render() {

        return (
            <div className="form_create_event">
                <Form>
                    <FormGroup>
                        <Label for="eventName">Nombre del Invitado</Label>
                        <Input
                            type="text"
                            maxLength="16"
                            name="name"
                            id="eventName"
                            placeholder="Max. 16 caracteres"
                            onChange={(event) => { this.props.setName(event); }} />
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label
                                    for="noGuest">Numero de Acompañantes</Label>
                                <Input
                                    placeholder={
                                        'Max. ' +

                                        ' personas'}
                                    max={10}
                                    min={1}
                                    type="number"
                                    name="noGuest"
                                    id="noGuest"
                                    onChange={(event) => { this.props.setTotal(event) }} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <Label for="table">Mesa Asignada</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        Disponibles
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    type="select"
                                    name="table"
                                    id="table">
                                    {this.renderTablesAsigned()}
                                </Input>
                            </InputGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default AddGuest;