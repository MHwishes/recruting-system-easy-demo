import initPaperData from './initPaper';
import editPaper from './editPaper';
import updateLogicPuzzle from './updateLogicPuzzle';
// import editSectionName from './editSectionName';
// import deleteSection from './deleteSection';
// import deleteHomeworkQuiz from './deleteHomeworkQuiz';
// import addSection from './addSection';

const actionMap = {
    'INIT_PAPER_DATA': initPaperData,
    'EDIT_PAPER': editPaper,
    'UPDATE_LOGIC_PUZZLE': updateLogicPuzzle,
    // 'EDIT_SECTION_NAME': editSectionName,
    // 'DELETE_SECTION': deleteSection,
    // 'REMOVE_HOMEWORK_QUIZ': deleteHomeworkQuiz,
    // 'ADD_SECTION':addSection
};


function rootReducer(state = {name: '', description: '', sections: []}, action) {
    const func = actionMap[action.type];
    if (!func) {
        return state;
    }
    return func(state, action.data);
}

export default rootReducer;