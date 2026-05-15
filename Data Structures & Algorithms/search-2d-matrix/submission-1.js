class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;

        let l = 0;
        let r = rows * cols - 1; // zero-indexed

        while (l <= r){
            const mid = Math.floor((r + l) / 2);
            // console.log(matrix[Math.floor(mid / rows)][mid % cols]);
            // console.log(`[${Math.floor(mid / rows)}][${mid % cols}]`);
            let row = Math.floor(mid / cols);
            let col = mid % cols

            if (target > matrix[row][col]){
                l = mid + 1;
            } else if (target < matrix[row][col]){
                r = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
