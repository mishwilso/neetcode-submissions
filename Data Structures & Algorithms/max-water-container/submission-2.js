class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0; // needs to be at the tallest position
        let r = heights.length - 1; //needs to be at the furthest tall position.

        let max = 0;

        while (l < r){
            let area = Math.min(heights[l], heights[r]) * (r - l);
            max = Math.max(area, max);
            
            if (heights[l] < heights[r]){
                l++;
            } else {
                r--;
            }
        }

        return max;
    }
}
