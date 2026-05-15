class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = new Map();

        for (const str of strs){
            let count = new Array(26).fill(0);

            for (const c of str){
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            let key = count.join(',')
            // unpack previous set, and append new string
            res.set(key, [...(res.get(key) || []), str]);
        }
        return Array.from(res.values());
    }
}


//Time O(m * n) 
// O(m) space 
// m = # strings
// n = # longest string