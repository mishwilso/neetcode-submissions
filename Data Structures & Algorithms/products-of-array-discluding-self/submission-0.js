class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const pre = new Array(n);
        const suf = new Array(n);

        let results = [1];

        
        //Setup
        suf[n - 1] = 1

        //Prefix // Calculate results as preffix
        for (let i = 1; i < n; i++){
            results.push(nums[i - 1] * results[i - 1])
        }

        // Add Suffix onto results at end
        // Starting at value 1 because theres no numbers after the ending value
        let suffix = 1;
        for (let i = n - 1; i >= 0; i--){
            // Multiply preffix by suffix
            results[i] *= suffix;

            // Multiply suffix by latest value to add onto the next result val
            suffix *= nums[i];
        }

        return results;
    }
}
