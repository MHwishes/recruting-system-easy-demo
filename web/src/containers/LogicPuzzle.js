import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import LogicPuzzle from '../components/paper-edit/LogicPuzzle';

function getToggle(paperInfo) {

    return paperInfo.sections.filter((item)=> {
            return item.type === 'logicPuzzle'
        }).length > 0;
}

function getQuizzes(paperInfo) {
    let logicQuizzes = paperInfo.sections.filter((item)=> {
            return item.type === 'logicPuzzle'
        })[0] || {};
    return logicQuizzes.definitions || {};
}

const mapStateToProps = (paperInfo)=>({
    toggleStatus: getToggle(paperInfo),
    definitions: getQuizzes(paperInfo)

});

const mapDispatchToProps = (dispatch)=> {
    return {
        updateLogicPuzzle: (data) => {
            dispatch({type: 'UPDATE_LOGIC_PUZZLE', data});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LogicPuzzle));
