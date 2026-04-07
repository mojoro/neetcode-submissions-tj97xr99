class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const validityMap = new Map();

        for (const row of board) {
            for (const cell of row) {
                if (cell != "." && validityMap.has(cell)) return false;
                validityMap.set(cell);
            }
            validityMap.clear();
        }

        for (let x = 0; x < board[0].length; x++) {
            for (let y = 0; y < board.length; y++) {
                if (board[y][x] != "." && validityMap.has(board[y][x])) return false;
                validityMap.set(board[y][x], 1);
            }
            validityMap.clear();
        }

        let [x, y, columnStart, rowCounter] = [0, 0, 0, 0];
        while (x < board.length && y < board[x].length) {
            if (board[x][y] != "." && validityMap.has(board[x][y])) return false;
            validityMap.set(board[x][y], 1);
            if (x == board.length - 1 && y == board.length - 1) break;
            y++;
            if (y == columnStart + 3) {
                y = columnStart;
                x++;
                rowCounter++;
            }
            if (x == board.length) {
                x = 0;
                columnStart += 3;
                y = columnStart;
            }
            if (rowCounter == 3) {
                validityMap.clear();
                rowCounter = 0;
            }
        }
        return true;
        }
}
