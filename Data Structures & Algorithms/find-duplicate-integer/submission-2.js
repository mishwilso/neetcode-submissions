class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

        let fast = nums[0];
        let slow = nums[0];

        // find the cycle point
        do {
            slow = nums[slow];
            fast = nums[nums[fast]]
        } while (slow !== fast);

        // find the duplicated values
        slow = nums[0];
        while(slow !== fast){
            slow = nums[slow];
            fast = nums[fast];
        }

        return slow;

    }
}
