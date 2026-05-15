class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let max = 0;
        let countSet = new Set(nums);

        for (const num of nums){

            // found the smallest num in line of consecutive values
            if (!countSet.has(num - 1)){
                let length = 1;

                // while finding consecutive numbers, incremenet length
                while (countSet.has(num + length)){
                    length++;
                }

                // calc max
                max = Math.max(max, length);
            }
        }

        return max;


    }
}
