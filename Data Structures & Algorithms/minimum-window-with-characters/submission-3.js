class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        if (t.length > s.length){
            return "";
        }

        const need = new Map();
        const have = new Map();
        let l = 0;
        let minLen = Infinity;
        let start = 0;
        let matches = 0;

        for (const c of t){
            need.set(c, (need.get(c) || 0) + 1);
        }

        for (let r = 0; r < s.length; r++){
            let char = s[r];

            have.set(char, (have.get(char) || 0) + 1);

            if (need.has(char) && have.get(char) === need.get(char)){
                matches++;
            }

            while (matches === need.size){

                if (r - l + 1 < minLen){
                    minLen = r - l + 1;
                    start = l;
                }

                let leftChar = s[l];
                if (need.has(leftChar) && have.get(leftChar) === need.get(leftChar)){
                    matches--;
                }

                have.set(leftChar, have.get(leftChar) - 1)

                l++;

            }
        }

        return minLen === Infinity ? "" : s.slice(start, start + minLen);
        
    }
"ADOBECODEBANC"

"ABC"


















$0
}
