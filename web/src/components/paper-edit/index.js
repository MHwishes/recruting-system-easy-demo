import PaperInfo from '../../containers/PaperInfo.js';
import PaperSubmit from './PaperSubmit';
import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Main extends Component {
    render() {
        return (
            <div id='paper-editor'>
                <div className='paper-header'>新增试卷</div>
                <div id='paper-body'>
                    <PaperInfo/>
                    <PaperSubmit/>
                </div>
            </div>
        );
    }
}