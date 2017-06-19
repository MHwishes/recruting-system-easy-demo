import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {Router, Route, browserHistory, IndexRoute, withRouter} from 'react-router';

import  PaperEditor from '../containers/PaperEditor';
import rootReducer from '../reducers/index.js';
import PaperList from './paper-list/index';

const store = createStore(
    rootReducer,
    applyMiddleware(createLogger(), thunkMiddleware)
);


export default class Main extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={URI_PREFIX+'/web'}>
                    <IndexRoute component={PaperList}/>
                    <Route path=':id/paperedit' component={PaperEditor}/>
                    {/*<Route path=':id/edit' component={PaperEditor}/>*/}
                    <Route path='new' component={PaperEditor}/>
                </Route>

            </Router>
        );
    }
}

const mapStateToProps = (state) => state;


let RootApp = connect(mapStateToProps)(withRouter(Main));

render(
    <Provider store={store}>
        <RootApp/>
    </Provider>,
    document.getElementById('app')
);