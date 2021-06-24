let field = document.querySelector('.main')
let cells = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
let mark = true
let win = false

field.addEventListener('click', makeMove)


function makeMove(item){
    let cell = item.target
    if (cell.classList.contains('X') || cell.classList.contains('O')) {
        return alert('Ход уже сделан')
    }
    if (mark === true){
        let markX = document.createElement('div')
        markX.classList.add('X')
        cell.appendChild(markX)
        cells[cell.id - 1] = 'X'
        mark = false
    } else if (mark === false){
        let markO = document.createElement('div')
        markO.classList.add('O')
        cell.appendChild(markO)
        cells[cell.id - 1] = 'O'
        mark = true
    }
    isVictory(cells)
}

function isVictory(cells) {
	let combs = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],];
    if (win === false){
        for (let comb of combs) {
            if (cells[comb[0]] == cells[comb[1]] &&  cells[comb[1]] == cells[comb[2]] && cells[comb[0]] != ' '){
                let message = document.createElement('h1')
                message.innerText = `${cells[comb[0]]} wins!`
                field.appendChild(message)
                win = true
            }
        }
    }
}