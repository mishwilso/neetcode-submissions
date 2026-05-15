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
        const need = new Map();
        for (let char of s1){
            need.set(char, (need.get(char) || 0) + 1)
        }

        // freq map of letters in substring of s2
        let window = new Map();
        let l = 0;

        // we want to have a match equal to the length of the needed char
        let matches = 0;

        for (let r = 0; r < s2.length; r++){
            let char = s2[r];

            window.set(char, (window.get(char) || 0) + 1);

            // check if we need this char
            // and if we have enough of the need character.
            if (need.has(char) && window.get(char) === need.get(char)){
                // if yes? we have a match!
                matches++;
            }

            while(r - l + 1 > s1.length){
                let leftChar = s2[l];

                // check if we're removing a needed character
                if (need.has(leftChar) && window.get(leftChar) === need.get(leftChar)){
                    // if yes, we remove a match
                    matches--;
                }

                window.set(leftChar, window.get(leftChar) - 1);
                l++;

            }

            if (matches === need.size){
                return true;
            }
        }

        return false;
    }
}


// Time : O(m)
// m = length of s2
// Space : O(1)