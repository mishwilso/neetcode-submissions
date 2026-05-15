class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */




    isValidSudoku(board) {
        let row = new Map();
        let col = new Map();
        let grid = new Map();

        for (let r = 0; r < 9; r++){
            for (let c = 0; c < 9; c++){

                //If empty? move on
                if (board[r][c] === '.') continue;

                //Squarekey
                const gridKey = `${Math.floor(r/3)},${Math.floor(c/3)}`

                if (row.has(r) && row.get(r).has(board[r][c])
                ||
                col.has(c) && col.get(c).has(board[r][c])
                ||
                grid.has(gridKey) && grid.get(gridKey).has(board[r][c])){
                    return false
                }

                if (!row.has(r)) row.set(r, new Set());
                if (!col.has(c)) col.set(c, new Set());
                if (!grid.has(gridKey)) grid.set(gridKey, new Set());

                row.get(r).add(board[r][c]);
                col.get(c).add(board[r][c]);
                grid.get(gridKey).add(board[r][c]);

            }
        }

        return true;

    }
}
