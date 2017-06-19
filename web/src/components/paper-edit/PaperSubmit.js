import React, {Component} from 'react';
import request from 'superagent';
import constant from '../../../config/constant';

export default class PaperSubmit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            saveOrRelease: '',
            isHidden: true,
        };
    }

    save() {

        request
            .post(API_PREFIX + '/paper-definitions')
            .set('Content-Type', 'application/json')
            .send(this.props.data)
            .end((err, res) => {
                if (res.statusCode === constant.httpCode.CREATED) {
                    this.setState({isHidden: false, saveOrRelease: '保存'});
                } else {
                    throw err;
                }
            });

    }

    release() {
        request
            .post(API_PREFIX + '/papers')
            .set('Content-Type', 'application/json')
            .send(this.props.data)
            .end((err, res) => {
                if (res.statusCode === constant.httpCode.CREATED) {
                    this.setState({isHidden: false, saveOrRelease: '发布'});
                } else {
                    throw err;
                }
            });
    }

    goToLists() {
        this.props.router.push(URI_PREFIX + '/web');
    }

    continueAddPaper() {
        const id = this.props.data.id;
        if (id) {
            this.props.router.push(URI_PREFIX + `/web/${id}/editpaper`);

        }
        else {
            this.props.router.push(URI_PREFIX + '/web/new');
            this.props.initPaperData({name: '', description: '', sections: []});
        }
        this.setState({
            isHidden: true
        })
    }

    render() {
        const isCreate = this.props.data.id ? '修改' : '新建';
        return (
            <div id='paper-submit' className='row'>
                <div className='col-xs-6 text-right'>
                    <button className=' btn btn-primary ' onClick={this.save.bind(this)}>保存</button>
                </div>

                <div className='col-xs-6 text-left'>
                    <button className=' btn btn-primary ' onClick={this.release.bind(this)}>发布</button>
                </div>


                <div className={this.state.isHidden ? 'hidden' : 'row no-margin-left-right form-group '}>
                    <div
                        className='alert alert-block alert-success col-sm-6 col-sm-offset-3 no-margin-bottom text-center'>
                        <p className='message-hint'>
                            <i className='ace-icon fa fa-check-circle icon-space'> </i>
                            {`试卷${this.state.saveOrRelease}成功,请选择查看试卷列表还是继续${isCreate}试卷?`}
                        </p>
                        <button className='btn btn-sm btn-success icon-space' onClick={this.goToLists.bind(this)}>查看试卷列表
                        </button>
                        <button className='btn btn-sm btn-default col-sm-offset-2'
                                onClick={this.continueAddPaper.bind(this)}>{`继续${isCreate}试卷`}</button>
                    </div>
                </div>

            </div>
        );
    }
}