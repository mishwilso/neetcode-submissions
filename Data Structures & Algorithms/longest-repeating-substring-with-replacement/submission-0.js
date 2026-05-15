class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map();
        let maxF = 0;
        let l = 0;
        let res = 0;

        for (let r = 0; r < s.length; r++){

            // Count the frequency using HashMap
            count.set(s[r], (count.get(s[r]) || 0) + 1);

            // Key track of the max freq
            maxF = Math.max(maxF, count.get(s[r]));

            // While the length of our subarray minus the
            // max frequency is above k
            // that means we have more than k characters than need replacing
            while (r - l + 1 - maxF > k){

                // so deduct from which ever letter we're removing frequency
                count.set(s[l], count.get(s[l]) - 1);

                // increase the left pointer
                l++;
            }

            // result is the maxFreq, or the length of our current subarray
            // could count more in a row vs the length of our subarray with nums erased.
            res = Math.max(maxF, r - l + 1)
        }


        return res; 
        
    }
}

// Time: O(n)
// Space: O(n)

