class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // substring cannot be larger than main string
        if (s1.length > s2.length) return false;

        // freq map of letters in s1
        const freqSub = new Map();
        for (let char of s1){
            freqSub.set(char, (freqSub.get(char) || 0) + 1)
        }

        // freq map of letters in substring of s2
        let freq = new Map();

        let l = 0;

        // // Calculate first window
        // for (let r =  0; r < s1.length; r++){
        //     freq.set(s2[r], (freq.get(s2[r]) || 0) + 1)
        // }


        // // sliding window 0 to end- fixed window size to the length of s1
        // // if (s1 freqmap)has(s2 window chars) return true. 
        // // if at end of sliding  window, return false. 

        // //keep incrementing l and decrementing r
        // for (let r = s1.length; r < s2.length; r++){
        //     if (freqMap === freq) return true;

        //     freq.set(s2[l], freq.get(s2[l]) - 1);
        //     freq.set(s2[r], (freq.get(s2[r]) || 0) + 1);

        //     l++;
        // }
        for (let r = 0; r < s2.length; r++){
            freq.set(s2[r], (freq.get(s2[r]) || 0) + 1);

            while(r - l + 1 > s1.length){
                freq.set(s2[l], freq.get(s2[l]) - 1);
                l++;
            }
          
            let isSubHash = [...freqSub.entries()].every(([key, value]) => {
                return freq.has(key) && freq.get(key) === value;
            });

            if (isSubHash){
                return true;
            }
        }

        return false;
    }
}


// Time : O(n)
// Space : O(1)