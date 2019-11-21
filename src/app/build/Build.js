import React from 'react';

import {connector} from "../../store/utils/simpleConnector";
import {Card, CardColumns} from "react-bootstrap";

const methods = {
    componentWillMount(props) {
        console.log('init Build', props);
    }
}

const Build = () => {

    return (
        <CardColumns>

            <Card>
                <Card.Body>
                    <Card.Title>1</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat labore laboriosam libero magnam
                        quam quo reprehenderit. Architecto, aut, dignissimos, et eveniet magnam molestias officiis omnis
                        porro quam quibusdam tenetur vitae!
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>2</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>3</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eius, placeat qui temporibus
                        ullam voluptas. Atque consequatur distinctio dolor dolorum eius nam nihil porro quibusdam,
                        quidem similique soluta totam vel.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>4</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolorem hic laboriosam laborum
                        placeat soluta suscipit tempora vero. Aperiam explicabo hic labore mollitia obcaecati omnis,
                        quam voluptas. Aliquid delectus, nisi?
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>5</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eveniet laudantium magnam
                        quisquam quo. Accusantium aspernatur aut culpa id, illo illum nulla obcaecati odio, quidem sequi
                        soluta suscipit tempore ullam.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>6</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>7</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>8</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>9</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>10</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

        </CardColumns>
    );

}

export default connector({methods, component: Build});
