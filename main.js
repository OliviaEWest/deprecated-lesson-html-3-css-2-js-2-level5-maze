var mazeBoard;
var maze = ['xxxxxxxxxxxx',
            '  xx x     x',
            'x    xx    x',
            'xxx x  xxxxx',
            'x x        x',
            'x x        x',
            'x xxx     xx',
            'x     xxxx x',
            'x   x    x  ',
            'x   xxx  x x',
            'x     x    x',
            'xxxxxxxxxxxx'];

function drawMaze(board, maze) {
    var rowHTML, boardHTML;
    
    boardHTML = '';
    for (let row of maze) {
        rowHTML = '<div class="row">';
        for (let letter of row) {
            if (letter === 'x') {
                rowHTML += '<span class="obstacle block"></span>'
            } else {
                rowHTML += '<span class="clear block"></span>'
            }
        }
        rowHTML += '</div>'
        boardHTML += rowHTML;
    }
    
    board.innerHTML = boardHTML;
}

window.addEventListener('load', function() {
    mazeBoard = document.getElementById('maze');
    drawMaze(mazeBoard, maze);
})