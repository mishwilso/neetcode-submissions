class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pair = position.map((pos, idx) => [pos, speed[idx]]);

        let stack = [];
        for (let [pos, sp] of pair.sort((a, b) => b[0] - a[0])){
            stack.push((target - pos) / sp);
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]){
                stack.pop();
            }
        }
        return stack.length;
    }
}
