import {Component} from 'react';
import React from 'react';

export default class LogicPuzzle extends Component {
    handleUpdate() {
        let quizzes;
        if (this.inputInfo.checked) {
            quizzes = {
                easy: parseInt(this.easy.value) || 0,
                normal: parseInt(this.normal.value) || 0,
                hard: parseInt(this.hard.value) || 0
            };
        }

        this.props.updateLogicPuzzle({quizzes});
    }


    componentDidUpdate() {
        this.inputInfo.checked = this.props.toggleStatus;
        this.easy.value = this.props.definitions.easy || '';
        this.normal.value = this.props.definitions.normal || '';
        this.hard.value = this.props.definitions.hard || '';
    }


    render() {
        return (
            <div id='paper-logic'>
                <div className='row'>
                    <label className='col-sm-2 text-right'> 逻辑题</label>
                    <div className='col-sm-6'>
                        <input type='checkbox' className='checkbox-info'
                               ref={(ref) => {
                                   this.inputInfo = ref;
                               }}
                               onChange={this.handleUpdate.bind(this)}/>
                    </div>
                </div>

                <div className={this.props.toggleStatus ? '' : 'hidden'}>
                    <div className='row'>
                        <span className='col-xs-offset-3 col-xs-1 logic-homeWork-info'>简单</span>
                        <div className='col-xs-1 no-padding'>
                            <input type='text' className='form-control'
                                   ref={(ref)=> {
                                       this.easy = ref;
                                   }}
                                   onBlur={this.handleUpdate.bind(this)}
                            />
                        </div>

                        <span className='col-xs-1  logic-homeWork-info'>一般</span>
                        <div className='col-xs-1 no-padding'>
                            <input type='text' className='form-control'
                                   ref={(ref)=> {
                                       this.normal = ref;
                                   }}
                                   onBlur={this.handleUpdate.bind(this)}/>
                        </div>

                        <span className='col-xs-1  logic-homeWork-info'>困难</span>
                        <div className='col-xs-1 no-padding'>
                            <input type='text' className='form-control'
                                   ref={(ref)=> {
                                       this.hard = ref;
                                   }}
                                   onBlur={this.handleUpdate.bind(this)}/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}