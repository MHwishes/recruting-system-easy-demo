const updateLogicPuzzle = (data, newDate)=> {
    let quizzesIndex = 0;

    for (let i = 0; i < data.sections.length; i++) {
        if (data.sections[i].type === 'logicQuiz') {
            quizzesIndex = i;
            break;
        }
    }
    let newSection = newDate.quizzes ? {
        definition: newDate.quizzes,
        type: 'logicPuzzle'
    } : undefined;

    data.sections.splice(quizzesIndex, 1, newSection);

    return Object.assign({}, data, {
        sections: data.sections.filter((item) => {
            return item !== undefined;
        })
    });


};

export default updateLogicPuzzle;