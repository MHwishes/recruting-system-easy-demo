import React, {Component} from 'react';
import {render} from 'react-dom';
import '../style/index.less';
import PaperInfo from '../containers/PaperInfo.js';

import rootReducer from '../reducers/index.js';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {withRouter} from 'react-router';

const store = createStore(
    rootReducer,
    applyMiddleware(createLogger(), thunkMiddleware)
);


export default class Main extends Component {
    render() {
        return (
            <div id='paper-editor'>
                <div className='paper-header'>新增试卷</div>
                <div id='paper-body'>
                    <PaperInfo/>
                </div>
            </div>
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