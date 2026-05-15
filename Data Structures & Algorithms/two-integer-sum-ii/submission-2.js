class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        // make map to hold numbers
        let left = 0;
        let right = numbers.length - 1;

        while (left < right){
            const calc = numbers[left] + numbers[right];
            if (calc === target){
                return [left + 1, right + 1];
            }

            if (calc < target){
                left++;
            }

            if (calc > target){
                right--;
            }
        }

        return []
    }
}
