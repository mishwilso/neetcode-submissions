class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sNorm = s.replace(/\W/g, "").toLowerCase();

        // Sliding window approach
        let left = 0;
        let right = sNorm.length - 1;

        while( left < right ){
            if (sNorm[left] !== sNorm[right]){
                return false;
            }
            left++;
            right--;
        } 
        return true;
    }
}
