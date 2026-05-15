class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    normalize(str){
        return str.toLowerCase().split("").sort().join('');
    }

    isAnagram(s, t) {

        return this.normalize(s) === this.normalize(t);

    }
}
