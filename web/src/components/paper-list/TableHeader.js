import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

class TableHeader extends Component {
    handleClick() {
        this.props.router.push(URI_PREFIX + '/web/new');
    }

    render() {
        return (
            <div id='paperList-header'>
                <div className='header'>
                    <div className='table-header'>
                        {this.props.paperListTitle}
                    </div>
                    <div className='row'>
                        <div className='paperList-title col-sm-offset-10 col-sm-2'>

                            <button className='btn btn-default ' onClick={this.handleClick.bind(this)}>
                                <span className='text'>新增试卷 </span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(withRouter(TableHeader));

