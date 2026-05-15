class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r){
            let mid = Math.floor((l + r) / 2);

            if (target === nums[mid]){
                return mid;
            }

            // if l and mid are in the same segment
            if (nums[l] <= nums[mid]){
                // Binary search here
                if (target >= nums[l] && target <= nums[mid]){
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            } else {
                if (target <= nums[r] && target >= nums[mid]){
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
            
        }

        return -1;
    }
}
