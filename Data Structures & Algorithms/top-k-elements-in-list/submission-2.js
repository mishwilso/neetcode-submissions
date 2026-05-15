class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Phase one, count frequencies
        let freq = new Map();
        for (const num of nums){
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        console.log(freq)

        // Phase two, place nums into buckets based on frequencies
        let buckets = Array.from({length: nums.length + 1}, () => []);
        for (const [num, freqVal] of freq.entries()){
            buckets[freqVal].push(num);
        }


        // Phase three, grab values from highest freq down
        let result = []
        for (let i = buckets.length - 1; i > 0; i--){
            if (buckets[i].length > 0){
                result.push(...buckets[i]);
            }
        }

        // return splice from 0 to k
        return result.slice(0, k);

    }
}
