import React, {Component} from 'react';

export default class PaperSubmit extends Component {
    save(){

    }

    render() {
        return (
            <div id='paper-submit' className='row'>
                <div className='col-xs-6 text-right'>
                    <button className=' btn btn-primary ' onclick={this.save.bind(this)}>保存</button>
                </div>

                <div className='col-xs-6 text-left'>
                    <button className=' btn btn-primary '>发布</button>
                </div>
            </div>
        );
    }
}