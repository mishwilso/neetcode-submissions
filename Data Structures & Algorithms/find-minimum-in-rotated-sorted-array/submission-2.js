class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length - 1;

        // not <= because we're trying to find a single index
        while (l < r){
            let mid = Math.floor((l + r) / 2);

            // if mid larger than right -> min is in right half
            if (nums[mid] > nums[r]){
                l = mid + 1;
            // else is in large half
            } else {
                r = mid; // mid may be the min point- so r = mid not mid - 1
            }
        }

        return nums[l];
    }
}
