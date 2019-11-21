import React, {useState} from 'react';

import {Button, Modal, ProgressBar} from "react-bootstrap";
import {connector} from "../../store/utils/simpleConnector";

const methods = {
    componentWillMount(props) {
        console.log('init Login', props);
    }
}

const Login = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" size="sm" onClick={handleShow}>
                Small button
            </Button>

            <ProgressBar animated now={45} />

            <Modal show={show} onHide={handleClose} size="sm">

                <Modal.Header closeButton={false}>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>

                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" size="sm" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>

        </div>
    );

}

export default connector({methods, component: Login});
