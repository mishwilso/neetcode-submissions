class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = [];
        const window = [];

        for (let r = 0; r < nums.length; r++){

            while (window.length && window[0] <= r - k){
                window.shift()
            }

            while (window.length && nums[window[window.length - 1]] < nums[r]){
                window.pop()
            }

            window.push(r);

            if (r - k + 1 >= 0){
                result.push(nums[window[0]]);
            }
            
        }

        return result;

        
    }
}
