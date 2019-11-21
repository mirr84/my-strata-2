import React from 'react';

import {connector} from "../../store/utils/simpleConnector";

const methods = {
    componentWillMount(props) {
        console.log('init Overview', props);
    }
}

const Overview = () => {

    return (
        <div>

            Overview

        </div>
    );

}

export default connector({methods, component: Overview});
