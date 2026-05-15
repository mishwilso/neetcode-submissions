class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;

        let minVal = Infinity

        while ( l <= r){
            // Found the split.
            if (nums[l] < nums[r]){
                minVal = Math.min(minVal, nums[l]);
                break;
            }


            let m = Math.floor((l + r) / 2);
            minVal = Math.min(minVal, nums[m]);
            if (nums[m] >= nums[l]){
                l = m + 1; 
            } else {
                r = m - 1;
            }
        }

        return minVal;
    }
}
