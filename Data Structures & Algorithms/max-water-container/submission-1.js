class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let l = 0;
        let r = heights.length - 1
        let max = 0;

        while(l < r){
            const area = Math.min(heights[l], heights[r])* (r - l);

            max = Math.max(max, area);

            // Goal: Find the tallest bar
            if (heights[l] < heights[r]){
                l++;
            } else {
                r--;
            }

            // Why? Once either r or l is equal to the tallest bar. then we only need to move
            // one pointer, instead of both. 
            // in the case of [1,7,4,5,4,7,3,6]
            // l is equal to 7 first.
            // so we only move the r pointer, because we calc the area using the min height. and r will
            // continuously point at min height bars.
        }

        // Original Answerr
        // for (let i = 0; i < heights.length; i++){

        //     //Skip duplicates
        //     if (i > 0 && heights[i] === heights[i - 1]) continue;

        //     let left = i;
        //     let right = heights.length -1;

        //     while (left < right){
        //         const min = Math.min(heights[left], heights[right]);
        //         const vol = min * (right - left);

        //         max = Math.max(max, vol);
                
        //         // Skip duplicate values
        //         while (left < right && heights[right] === heights[right - 1]) right--;

        //         right--;
        //     }
        // }

        return max;



    }
}
