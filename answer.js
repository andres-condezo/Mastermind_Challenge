function createRandomAnswer() {
    answer = []
    let allColors = Object.keys(colors)
    let ind, size = allColors.length
    for (let i = 0; i < cols; i++)
    {
        ind = Math.floor(Math.random() * size);
        answer.push(allColors[ind])
    }
}

function renderAnswerHidden() {
    let answerHTML = answer.reduce((acc, _) => `${acc}<div id="" class="answer-peg ${classPegHidden}">?</div>`, '')

    DOM.answerContainer.insertAdjacentHTML('beforeend', answerHTML)
}

function renderAnswer() {
    let answerHTML = answer.reduce((acc, color) => `${acc}<div id="" class="answer-peg ${color}"></div>`, '')

    DOM.answerContainer.innerHTML = ''
    DOM.answerContainer.insertAdjacentHTML('beforeend', answerHTML)
}

function initAnswer() {
    createRandomAnswer()
    renderAnswerHidden()
}