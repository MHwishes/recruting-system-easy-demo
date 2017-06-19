import PaperInfo from '../../containers/PaperInfo.js';
import PaperSubmit from '../../containers/PaperSubmit.js';
import LogicPuzzle from '../../containers/LogicPuzzle.js'
import superagent from 'superagent';
import '../../style/paper-editor.less';

import React, {Component} from 'react';

export default class Main extends Component {

    componentDidMount() {
        const id = this.props.params.id;
        if (id) {
            superagent
                .get(API_PREFIX + `/papers/${id}`)
                .end((err, res) => {
                    if (err) {
                        throw (err)
                    } else {
                        this.props.initPaperData(res.body);
                    }
                })
        }
    }

    componentWillUnmount() {
        this.props.initPaperData({name: '', description: '', sections: []});
    }

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