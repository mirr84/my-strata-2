import React from 'react';

import {connector} from "../../store/utils/simpleConnector";
import {Button, Card, Col, Form, FormControl, ListGroup, Nav, Navbar, NavDropdown, Spinner} from "react-bootstrap";

const methods = {
    componentWillMount(props) {
        console.log('init LeftMenu', props);
    }
}

const LeftMenu = ({history}) => {

    return (
        <ListGroup variant={"flush"}>
            <ListGroup.Item action onClick={()=>history.push(`/overview`) }>
                <Spinner animation="grow" size="sm" /> overview
            </ListGroup.Item>
            <ListGroup.Item action onClick={()=>history.push(`/build`) }>
                build
            </ListGroup.Item>
            <ListGroup.Item action onClick={()=>history.push(`/science`) }>
                science
            </ListGroup.Item>
        </ListGroup>
    );

}

export default connector({methods, component: LeftMenu});
