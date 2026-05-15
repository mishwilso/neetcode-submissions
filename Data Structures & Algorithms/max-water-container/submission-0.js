class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let max = 0;

        for (let i = 0; i < heights.length; i++){

            //Skip duplicates
            if (i > 0 && heights[i] === heights[i - 1]) continue;

            let left = i;
            let right = heights.length -1;

            while (left < right){
                const min = Math.min(heights[left], heights[right]);
                const vol = min * (right - left);

                max = Math.max(max, vol);
                
                // Skip duplicate values
                while (left < right && heights[right] === heights[right - 1]) right--;

                right--;
            }
        }

        return max;



    }
}
