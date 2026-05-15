class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const norm = (str) => {
            // Lower case everything
            // split into array
            // sort characters alphabetically
            // rejoin into a word
            return str.toLowerCase().split('').sort().join('')
        }

        // compare normalized words.
        return norm(s) === norm(t)

    }

}
