import React, {Component} from 'react';
import superagent from 'superagent';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import '../../style/paper-list.less';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paperListTitle: '试卷列表',
            // operationButton: false,
            paperList: [],
            // showModal: false,
            // toDeletePapers: [],
            // deleteIds: [],
        };
    }

    componentDidMount(){
        superagent
            .get(API_PREFIX + '/papers')
            .end((err, res) => {
                if (err) {

                    throw (err);
                } else {
                    this.setState({paperList: res.body});
                }
            });
    }



    // deletePaper(){
    //
    // }

    render() {
        return (
            <div id='paper-list' className="col-sm-offset-2 col-sm-8">
                <TableHeader paperListTitle={this.state.paperListTitle}/>

                <div>
                    <TableBody paperList={this.state.paperList}/>

                </div>
            </div>
        );
    }
}