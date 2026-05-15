class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // variables
        let hash = new Map();


        // loop through nums
        // check if hash has target - val, if not, add val to hash
        for (let i = 0; i < nums.length; i++){

            const pairVal = target - nums[i];

            if (hash.has(pairVal)){
                return ([hash.get(pairVal), i]);
            }
            
            hash.set(nums[i], i);
        }

    }
}
