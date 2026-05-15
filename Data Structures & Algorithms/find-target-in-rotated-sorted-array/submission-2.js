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
            let mid = Math.floor((r + l) / 2);
            if (target === nums[mid]){
                return mid;
            }

            console.log(nums[mid])
            // left section is sorted
            if (nums[l] <= nums[mid]){
                // if target is less than mid and l, bring down r
                if (target < nums[mid] && target >= nums[l]){
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }

            } else {
                // right section is sorted
                if (target > nums[mid] && target <= nums[r]){
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }

        return -1;


    }
}
