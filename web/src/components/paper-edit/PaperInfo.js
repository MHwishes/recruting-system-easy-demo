import React, {Component} from 'react';

export default class PaperInfo extends Component {

    editPaperName() {
        this.props.editPaper({name: this.name.value});
    }

    editDescription() {
        this.props.editPaper({description: this.description.value});
    }

    componentDidUpdate() {
        this.name.value = this.props.name || '';
        this.description.value = this.props.description || '';
    }

    receivePropsData() {
        this.name.value = this.props.name || '';
        this.description.value = this.props.description || '';
    }

    componentDidMount() {
        this.receivePropsData();
    }


    render() {
        return (
            <div id='paper-info'>
                <div className='row'>
                    <label className='col-sm-2 label-control'> 试卷名称</label>
                    <div className='col-sm-6'>
                        <input type='text' className='form-control' placeholder='请输入试卷名称'
                               ref={(ref) => {
                                   this.name = ref;
                               }}
                               onBlur={this.editPaperName.bind(this)}
                        />
                    </div>
                </div>
                <div className='row'>
                    <label className='col-sm-2  label-control'>试卷描述</label>
                    <div className='col-sm-6'>
                        <textarea type='text' className='form-control' placeholder='请输入试卷描述'
                                  ref={(ref) => {
                                      this.description = ref;
                                  }}
                                  onBlur={this.editDescription.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}