class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length;
        let COLS = matrix[0].length;

        let l = 0;
        let r = ROWS * COLS - 1;

        while (l <= r){
            let mid = Math.floor((l + r) / 2);

            let currRow = Math.floor(mid / COLS);
            let currCol = mid % COLS;

            console.log(currCol, currRow);

            if (matrix[currRow][currCol] < target) {
                l = mid + 1;
            } else if (matrix[currRow][currCol] > target) {
                r = mid - 1;
            } else {
                return true;
            }
        }

        return false;

    }
}
