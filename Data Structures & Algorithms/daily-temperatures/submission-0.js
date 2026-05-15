class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let tempStack = [];
        let res = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++){
            while(tempStack.length && tempStack[tempStack.length - 1][0] < temperatures[i]){
                let [tempVal, tempIdx] = tempStack.pop();
                res[tempIdx] = i - tempIdx;
            }

            tempStack.push([temperatures[i], i])
            
        }

        return res;
    }
}
