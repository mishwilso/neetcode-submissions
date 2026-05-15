class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // if no substring- return empty
        if (t === '') return '';

        // create a freq map of the needchars
        let need = new Map();
        for (let char of t){
            need.set(char, (need.get(char) || 0) + 1);
        }


        // variables: 
        // counter for chars we have matched
        // marker for result index
        // the minimum length we found
        // left pointer
        // window map
        let matches = 0;
        let resIdx = 0;
        let minLen = Infinity;

        let l = 0;

        let window = new Map();

        // loop through string
        for (let r = 0; r < s.length; r++){
            let char = s[r];

            // add characters in window
            window.set(char, (window.get(char) || 0) + 1);

            // if the char is needed and we have the correct amount
            // then we've fulfilled one of our matches
            if (need.has(char) && need.get(char) === window.get(char)){
                matches++;
            }

            // while we have all the matched values
            // lets see how small we can make out window before we no longer match
            while (matches === need.size){
                // if the string length is less than the minLen so far
                // move up the result index
                // and change over the minLen
                if (r - l + 1 < minLen){
                    minLen = r - l + 1;
                    resIdx = l;
                }
                let leftChar = s[l]

                // remove the char 
                if (need.has(leftChar) && window.get(leftChar) === need.get(leftChar)){
                    matches--;
                }

                window.set(leftChar, (window.get(leftChar) || 0) - 1);


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
