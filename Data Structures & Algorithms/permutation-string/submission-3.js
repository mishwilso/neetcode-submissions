class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const need = new Map();
        const have = new Map();
        let matches = 0;
        let l = 0;

        if (s1.length > s2.length) {
            return false;
        } 

        for (const c of s1){
            need.set(c, (need.get(c) || 0) + 1);
        }

        console.log("Need: ", need);

        for (let r = 0; r < s2.length; r++){
            
            if (need.has(s2[r])){
                have.set(s2[r], (have.get(s2[r]) || 0) + 1);

                if (have.get(s2[r]) === need.get(s2[r])){
                    matches++;
                }
            }

            console.log(have);

            if (matches === need.size){
                return true;
            }
            console.log(r - l, s1.length)
                        
            // increment l when window is size of word
            // remove l char from window
            if (r - l + 1 === s1.length){

                if (need.has(s2[l])){
                    if (have.get(s2[l]) === need.get(s2[l])){
                        matches--;
                    }
                    have.set(s2[l], have.get(s2[l]) - 1);
                }

                l++;
            }

        }
        return false;
    }
}
