import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

export default class Subtitle extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h3 className="text-muted">{this.props.children}</h3>
                    </Col>
                </Row>
            </Container>
        )
    }
}
