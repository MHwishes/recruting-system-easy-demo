import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import superagent from 'superagent';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import '../../style/paper-list.less';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paperListTitle: '试卷列表',
            operationButton: false,
            paperList: [],
            showModal: false,
            toDeletePapers: [],
            deleteIds: [],
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
    cancelButton(){

    }

    confirmButton(){

    }
    deletePaper(){

    }

    render() {
        return (
            <div id='paper-list' className="col-sm-offset-2 col-sm-8">
                <TableHeader paperListTitle={this.state.paperListTitle}/>

                <div>
                    <TableBody paperList={this.state.paperList} onDeletePaper={this.deletePaper.bind(this)}
                               ref={(ref) => {
                                   this.paperForm = ref;
                               }}/>

                    <div className={this.state.showModal ? '' : 'hidden'}>
                        <div className='static-modal'>

                            <Modal.Dialog>
                                <Modal.Header>
                                    <Modal.Title>删除提示</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    您确定要删除此试卷吗？
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button onClick={this.cancelButton.bind(this)}>取消</Button>
                                    <Button bsStyle='primary' onClick={this.confirmButton.bind(this)}>确定</Button>
                                </Modal.Footer>

                            </Modal.Dialog>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}