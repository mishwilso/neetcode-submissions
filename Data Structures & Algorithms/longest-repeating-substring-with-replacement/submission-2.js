class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Map();
        let l = 0;
        let maxCount = 0;
        let maxWindow = 0;


        for (let r = 0; r < s.length; r++){
            count.set(s[r], (count.get(s[r]) || 0) + 1);


            maxWindow = Math.max(maxWindow, count.get(s[r]));

            while (r - l + 1 - maxWindow > k){
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }
            
            maxCount = Math.max(maxWindow, r - l + 1);
        }

        return maxCount;

    }
}
