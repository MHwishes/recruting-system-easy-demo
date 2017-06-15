import PaperInfo from '../../containers/PaperInfo.js';
import PaperSubmit from '../../containers/PaperSubmit.js';
import LogicPuzzle from '../../containers/LogicPuzzle.js';

import React, {Component} from 'react';

export default class Main extends Component {
    render() {
        return (
            <div id='paper-editor'>
                <div className='paper-header'>新增试卷</div>
                <div id='paper-body'>
                    <PaperInfo/>
                    <LogicPuzzle/>
                    <PaperSubmit/>
                </div>
            </div>
        );
    }
}