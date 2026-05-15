class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = new Map();
        let bucket = Array.from({length: nums.length + 1}, () => []);

        // Count frequency of numbers
        for (let i = 0; i < nums.length; i++){
            freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
        }
        // Put numbers in buckets based on their frequency
        for (const [num, freqVal] of freq.entries()){
            bucket[freqVal].push(num);
        }

        // Grab the numbers in the highest freq buckets, until results in of size k
        let results = [];
        for (let i = bucket.length - 1; i >= 0 && results.length < k; i--){
            if (bucket[i].length > 0){
                results.push(...bucket[i]);
            }
        }

        // Slice result to ensure we are at k size, in case multiple vals exist in a bucket
        return results.slice(0, k);
        
    }
}
