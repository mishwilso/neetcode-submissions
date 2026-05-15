class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Variables
        let max = 0;
        let numSet = new Set(nums);

        for (let num of nums){
            if (!numSet.has(num - 1)){
                let length = 1;
                while (numSet.has(num + length)){
                    length++;
                }
                max = Math.max(max, length)
            }
        }

        return max


    }
}
