import React, { Component } from 'react';
import { Container , Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
                <Jumbotron as="section" className="text-center">
                    <Container>
                        <h1>数智教育</h1>
                        <p className="lead text-muted">这是基本介绍</p>
                    </Container>
                </Jumbotron>
        );
    }
}
