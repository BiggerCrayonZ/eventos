import React, { Component } from 'react';

import { Card, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class StatusComponent extends Component {
    render() {
        let spaces = ((this.props.event.n_spaces * this.props.event.tables) - this.props.event.confirm);
        return (
            <Card>
                <CardBody className="status_grid">
                    <div className="status_item">
                        <FontAwesomeIcon icon="list-alt" />
                        <p className="text-muted span_event">{spaces} Espacios Disponibles</p>
                    </div>
                    <div className="status_item">
                        <FontAwesomeIcon icon="user-check" />
                        <p className="text-muted span_event">{this.props.event.confirm} Invitados Confirmados</p>
                    </div>
                    <div className="status_item">
                        <FontAwesomeIcon icon="user-circle" />
                        <p className="text-muted span_event">{this.props.event.guest.length} Invitados en Espera</p>
                    </div>
                </CardBody>
            </Card>
        );
    }
}

export default StatusComponent;