class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0
        let map = new Map()
        let maxLength = 0;

        for(let r = 0; r < s.length; r++){
            
            // check if letter already exist
            if (map.has(s[r])){
                l = Math.max(map.get(s[r]) + 1, l);
            }

            // add letter
            map.set(s[r], r);
            // +1 because if same index, length would be one not zero
            maxLength = Math.max(maxLength, r - l + 1); 

        }

        return maxLength;
    }
}
