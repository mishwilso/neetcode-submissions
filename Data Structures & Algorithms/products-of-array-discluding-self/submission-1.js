class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        // this is our result array
        let prefix = new Array(nums.length);
        prefix[0] = 1;

        // calc the prefix for each index 
        for (let i = 1; i < nums.length; i++){
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }

        let suffix = 1;
        for (let i = nums.length-1 ; i >= 0; i--){
            prefix[i] *= suffix;
            suffix *= nums[i]
        }

        return prefix;

    }
}
