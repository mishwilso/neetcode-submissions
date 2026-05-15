class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        const n = nums.length;
        let result = []

        nums.sort((a , b) => (a-b));

        for (let i = 0; i < n - 1; i++){

            // Skip duplicates
            if (i > 0 && nums[i] === nums[i-1]) continue;

            //get all the numbers after i, left and right side
            let left = i + 1;
            let right = n - 1;

            while(left < right){
                const sum = nums[left] + nums[i] + nums[right];

                if (sum === 0){
                    result.push([nums[left], nums[i], nums[right]]); 

                    // find all duplicate indexes to prevent duplicate inputs
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;

                    // increment both sliders
                    left++;
                    right--;
                } else if (sum < 0){
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result;
    }
}
