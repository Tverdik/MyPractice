const field = document.querySelectorAll('.item')
const win = document.querySelector('.win-message')
const cells = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
let mark = true

const makeMove = (item) => {
    let cell = item.target
    if (cell.classList.contains('X') || cell.classList.contains('O')) {
        return alert('Ход уже сделан')
    }
    if (mark) {
        whichMark(cell, 'X')
        mark = false
    } else if (!mark) {
        whichMark(cell, 'O')
        mark = true
    }
    if (isVictory(cells)) {
        field.forEach(cell => cell.removeEventListener('click', makeMove))
    }
}

const whichMark = (cell, mark) => {
    const markX = document.createElement('div')
        markX.classList.add(mark)
        cell.appendChild(markX)
        cells[cell.id - 1] = mark
}

const isVictory = (cells) => {
	const combs = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    for (let comb of combs) {
        if (cells[comb[0]] == cells[comb[1]] &&  cells[comb[1]] == cells[comb[2]] && cells[comb[0]] != ' ') {
            const message = document.createElement('h1')
            message.innerText = `${cells[comb[0]]} wins!`
            win.appendChild(message)
            return true
        }
    }
}

field.forEach(cell => cell.addEventListener('click', makeMove))