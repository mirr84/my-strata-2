import React from 'react';

import {connector} from "../../store/utils/simpleConnector";

const methods = {
    componentWillMount(props) {
        console.log('init Science', props);
    }
}

const Science = () => {

    return (
        <div>

            Science

        </div>
    );

}

export default connector({methods, component: Science});
