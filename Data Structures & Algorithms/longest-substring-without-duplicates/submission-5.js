class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map();
        let l = 0;
        let maxLength = 0;

        for(let r = 0; r < s.length; r++){

            if(map.has(s[r])){
                // We want to move the left pointer forward to the next non rep
                // we choose the max between the l and the point after the repeating val
                // because the left pointer may already be after the repeating val
                l = Math.max(map.get(s[r]) + 1, l);
            }
            map.set(s[r], r);
            maxLength = Math.max(maxLength, r - l + 1); 
        }

        return maxLength;
        

    }
}
