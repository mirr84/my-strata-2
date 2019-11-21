import React from 'react';

import {connector} from "../../store/utils/simpleConnector";

const methods = {
    componentWillMount(props) {
        console.log('init Page404', props);
    }
}

const Page404 = () => {

    return (
        <div>

            Page404

        </div>
    );

}

export default connector({methods, component: Page404});
