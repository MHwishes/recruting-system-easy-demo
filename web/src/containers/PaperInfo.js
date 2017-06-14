import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import PaperInfo from '../components/PaperInfo.js';

const mapStateToProps = (paperInfo) => {
    return {
        name: paperInfo.name,
        description: paperInfo.description
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editPaper: (data) => {
            dispatch({type: 'EDIT_PAPER', data});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PaperInfo));