import React,{Component} from 'react';
import {Link} from 'react-router';

class PaperForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectAll: false,
            selectBox: []
        };
    }

    getSelectedIds() {
        return this.props.paperList.data.filter((item, key) => {
            return this.state.selectBox[key];
        }).map(item => item._id);
    }

    onSelectAll() {
        // let selectAll = !this.state.selectAll;
        // let selectBox = this.props.paperList.data.map(item => selectAll);
        // this.setState({
        //     selectAll,
        //     selectBox
        // }, () => {
        //     this.props.onIdChange(this.getSelectedIds());
        // });
    }

    onCheckbox(index) {
        // let selectBox = this.props.paperList.data.map((item, idx) => this.state.selectBox[idx]);
        // selectBox[index] = !selectBox[index];
        // let selectAll = selectBox.every((item) => item);
        // this.setState({
        //     selectBox,
        //     selectAll
        // }, () => {
        //     this.props.onIdChange(this.getSelectedIds());
        // });
    }

    deletePaper(id) {
        // this.props.onDeletePaper(id);
    }

    clearCheckbox() {
        this.setState({
            selectBox: [],
            selectAll: false
        });
    }

    handleChange(sort, order) {

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

        const paperList = this.props.paperList.papers || [];
        let paperHTML = paperList.map(({name, description, _id}, index) => {

            return (
                <tr key={index}>
                    <th scope='row'>
                        <input type='checkbox' checked={this.state.selectBox[index] || false}
                               onClick={this.onCheckbox.bind(this, index)}/>
                    </th>
                    <td> {name} </td>
                    <td>{description}</td>

                    <td>
                        <div className='action-buttons'>
                            <Link className='green'>
                                <i className={'fa fa-pencil bigger pencil-green'}> </i>
                            </Link>
                            <Link className='red' onClick={this.deletePaper.bind(this, _id)}>
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
                            <th><input type='checkbox' checked={this.props.checked}
                                       onClick={this.props.onChange}/>
                            </th>
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
            </div>
        );
    }
}

export default PaperForm;
