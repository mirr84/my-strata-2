import React from 'react';

import {Route, Switch} from 'react-router-dom';
import {connector} from "./store/utils/simpleConnector";
import Login from "./Login";

const methods = {
    componentWillMount(props) {
        console.log('init App', props);
    }
}

const Page404 = () => <div>Page404</div>

const App = () => {

    return (
        <div>

            <Switch>
                <Route exact path={"/"} component={Login}/>
                <Route exact path={"/login"} component={Login}/>

                <Route component={Page404}/>
            </Switch>

        </div>
    );

}

export default connector({methods, component: App});
