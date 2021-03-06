import React,{Component} from 'react';
import {Link} from 'react-router';
import {Modal, Button} from 'react-bootstrap';
import constant from '../../../config/constant';
import superagent from 'superagent';

class PaperForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal:false,
            deleteId:null,
            paperList: [],
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

    deletePaper(id) {
        this.setState({
            showModal:true,
            deleteId:id
        })
    }

    cancelButton(){
        this.setState({
            showModal:false
        })
    }

    confirmButton(){
        superagent
            .delete(API_PREFIX + `/papers/${this.state.deleteId}`)
            .end((err, res) => {
                if (err) {
                    throw (err);
                } else {
                    if(res.status===constant.httpCode.NO_CONTENT){
                        superagent
                            .get(API_PREFIX + '/papers')
                            .end((err, res) => {
                                if (err) {
                                    throw (err);
                                } else {
                                    this.setState({paperList: res.body,showModal:false});
                                }
                            });

                    }
                }
            });
    }

    render() {
        let fields = [
            {
                name: '名称'
            }, {
                name: '描述'
            }, {
                name: '操作'
            }
        ];

        const paperList = this.state.paperList || [];
        let paperHTML = paperList.map(({name, description, id}, index) => {

            return (
                <tr key={index}>
                    <td> {name} </td>
                    <td>{description}</td>

                    <td>
                        <div className='action-buttons'>
                            <Link className='green' to={URI_PREFIX + `/web/${id}/paperedit`}>
                                <i className={'fa fa-pencil bigger pencil-green'}> </i>
                            </Link>
                            <Link className='red' onClick={this.deletePaper.bind(this, id)}>
                                <i className='fa fa-trash-o bigger'> </i>
                            </Link>
                        </div>
                    </td>
                </tr>
            );
        });

        return (
            <div id='paperList-form'>

                <div className='table-form'>
                    <table className='table table-striped table-bordered table-hover'>
                        <thead>
                        <tr>
                            {
                                fields.map(({name}, index) => {
                                    return (
                                        <th key={index}>{name}</th>
                                    );
                                })
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {paperHTML}
                        </tbody>
                    </table>
                </div>
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
        );
    }
}

export default PaperForm;
