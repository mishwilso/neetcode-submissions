class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        // make map to hold numbers
        let map = new Map();

        //check if map contains target - num
        // if yes? return them
        // if no? add number to map
        for (let i = 0; i < numbers.length; i++){
            const diff = target - numbers[i];
            
            if (map.has(diff)){
                return [map.get(diff) + 1, i + 1];
            }
            map.set(numbers[i], i);
        }

        


    }
}
