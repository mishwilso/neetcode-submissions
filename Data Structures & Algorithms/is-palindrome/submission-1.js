class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // remove 
        let sNorm = s.replaceAll(/[\p{P}\s]/gu, "").toLowerCase();

        console.log(sNorm);
        let left = 0;
        let right = sNorm.length - 1;

        while (left < right) {
            if (sNorm[left] !== sNorm[right]) return false;
            left++;
            right--;
        }

        return true;
    }
}
