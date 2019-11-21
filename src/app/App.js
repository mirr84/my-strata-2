import React from 'react';

import {Route, Switch} from 'react-router-dom';
import {connector} from "../store/utils/simpleConnector";
import Login from "./login/Login";
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    FormControl,
    ListGroup,
    Nav,
    Navbar,
    NavDropdown,
    Row
} from "react-bootstrap";
import Page404 from "./errorPages/Page404";
import NavPanel from "./common/NavPanel";
import LeftMenu from "./common/LeftMenu";

const methods = {
    componentWillMount(props) {
        console.log('init App', props);
    }
}

const App = () => {

    return (
        <Container fluid={false}>
            <Row noGutters={true}>
                <Col xs={12}>
                    <NavPanel/>
                </Col>
                <Col xs={3}>
                    <Card body border="light">
                        <LeftMenu/>
                    </Card>
                </Col>
                <Col>
                    <Card body border="light">
                        <Switch>
                            <Route exact path={"/"} component={Login}/>
                            <Route exact path={"/login"} component={Login}/>

                            <Route component={Page404}/>
                        </Switch>
                    </Card>
                </Col>
            </Row>
        </Container>
    );

}

export default connector({methods, component: App});
