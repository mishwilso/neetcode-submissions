class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // stuff: can't sort
        // set? maaybe for t for quick look up? 

        // hashmaps can count freq...
        // slide through s...
        // track minLength = (minlength, r - l + 1);

        // move l to r...somehow...
        if (t === '') return '';

        let need = new Map();
        for (let char of t){
            need.set(char, (need.get(char) || 0) + 1);
        }

        let matches = 0;
        let resIdx = 0;
        let minLen = Infinity;

        let l = 0;

        let window = new Map();

        for (let r = 0; r < s.length; r++){
            let char = s[r];

            window.set(char, (window.get(char) || 0) + 1);

            if (need.has(char) && need.get(char) === window.get(char)){
                matches++;
            }

            while (matches === need.size){
                // if the string length is less than the minLen so far
                // move up the result index
                // and change over the minLen
                if (r - l + 1 < minLen){
                    minLen = r - l + 1;
                    resIdx = l;
                }
                let leftChar = s[l]

                window.set(leftChar, (window.get(leftChar) || 0) - 1);

                if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)){
                    matches--;
                }

                l++;
            }
        }

        return minLen === Infinity ? "" : s.slice(resIdx, resIdx + minLen);
    }
}


// Aim:
// Time: O(n)
// Space: O(m)

// n == length of s
// m == num of unique characters in s and t
