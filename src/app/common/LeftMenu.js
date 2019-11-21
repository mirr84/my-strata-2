import React from 'react';

import {connector} from "../../store/utils/simpleConnector";
import {Button, Card, Col, Form, FormControl, ListGroup, Nav, Navbar, NavDropdown, Spinner} from "react-bootstrap";

const methods = {
    componentWillMount(props) {
        console.log('init LeftMenu', props);
    }
}

const LeftMenu = () => {

    return (
        <ListGroup variant={"flush"}>
            <ListGroup.Item action onClick={() => {}}>
                <Spinner animation="grow" size="sm" /> Link 1
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => {}}>
                Link 2
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => {}}>
                This one is a button
            </ListGroup.Item>
        </ListGroup>
    );

}

export default connector({methods, component: LeftMenu});
