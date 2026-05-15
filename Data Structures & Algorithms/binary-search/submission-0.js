class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;

        while( l <= r ){
            const mid = Math.floor((l + r) / 2);

            // Target is larger, move left
            if (target > nums[mid]){
                l = mid + 1;
            // Target is smaller, move right    
            } else if ( target < nums[mid] ) {
                r = mid - 1;
            } else {
                return mid; // Target found
            }
        }
        // Target not found
        return -1;
    }
}
