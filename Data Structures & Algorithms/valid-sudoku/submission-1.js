class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let row = new Map();
        let col = new Map();
        let grid = new Map();


        for (let r = 0; r < board.length; r++){
            for (let c = 0; c < board[r].length; c++){

                const currVal = board[r][c];
                const gridKey = ((Math.floor(r / 3) * 3) + Math.floor(c / 3));

                // not a number so skip.
                if (currVal === '.') continue;

                // check if val of board[r][c] is already in 
                // row[r], col[c], grid[gridKey]
                if (
                    (row.has(r) && row.get(r).has(currVal))
                    || (col.has(c) && col.get(c).has(currVal))
                    || (grid.has(gridKey) && grid.get(gridKey).has(currVal))
                ) return false;

                if (!row.has(r)) row.set(r, new Set());
                if (!col.has(c)) col.set(c, new Set());
                if (!grid.has(gridKey)) grid.set(gridKey, new Set());

                row.get(r).add(currVal);
                col.get(c).add(currVal);
                grid.get(gridKey).add(currVal);
            }
        }

        return true;

    }
}
