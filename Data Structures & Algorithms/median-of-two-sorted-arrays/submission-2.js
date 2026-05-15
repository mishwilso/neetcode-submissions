class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums2.length < nums1.length){
            [nums1, nums2] = [nums2, nums1]
        }

        let m = nums1.length, n = nums2.length;
        let low = 0, high = m;

        while (low <= high){
            
            let i = Math.floor((low + high) / 2); // Nums1 partition
            let j = Math.floor((m + n + 1) / 2) - i; // Nums2 partition

            // Get the vals for nums1 on either side of the partition
            let maxLeft1 = i === 0 ? -Infinity : nums1[i - 1]; // Edge: No nums on the left side
            let minRight1 = i === m ? Infinity : nums1[i]; // Edge: All nums on the left side

            // Get the nums2 partition vals
            let maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
            let minRight2 = j === n ? Infinity : nums2[j]

            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1 ){
                if ((m + n) % 2 === 1)  { //is Odd
                    return Math.max(maxLeft1, maxLeft2);
                } else { // is even
                    return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
                }

            } else if (maxLeft1 > minRight2){
                high = i - 1; // too few nums1 values, i is too large, shrink right
            } else {
                low = i + 1; // too many nums1 values, i too small, shrink left
            }
        }

        return 0;
    }
}
