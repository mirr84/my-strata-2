import React from 'react';

import {connector} from "../../store/utils/simpleConnector";
import { Nav, Navbar} from "react-bootstrap";

const methods = {
    componentWillMount(props) {
        console.log('init NavPanel', props);
    }
}

const NavPanel = ({history}) => {

    return (
        <Navbar bg="light" expand="lg" size="sm" >
            <Navbar.Brand href="#home">strata</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={()=>history.push(`/home`) }>Home</Nav.Link>
                    <Nav.Link onClick={()=>history.push(`/profile`) }>Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

}

export default connector({methods, component: NavPanel});
