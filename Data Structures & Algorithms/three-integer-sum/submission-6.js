class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        let result = []
        nums = nums.sort((a, b) => a - b);
        console.log(nums);

        for (let i = 0; i < nums.length - 1; i++){

            // Skip duplicate indexs, will get the same result
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right){
                const sum = nums[left] + nums[i] + nums[right];

                if (sum === 0){
                    result.push([nums[left] , nums[i] , nums[right]]);

                    while (left < right && nums[left] === nums[left+1]) left++;
                    while (left < right && nums[right] === nums[right+1]) right--;

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
