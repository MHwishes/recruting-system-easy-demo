import PaperEditor from '../components/paper-edit/index';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

const mapStateToProps = ({paperInfo}) => {
    return {paperInfo};
};

function mapDispatchToProps(dispatch) {
    return {
        initPaperData: (data) => {
            dispatch({type: 'INIT_PAPER_DATA', data});
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PaperEditor));
