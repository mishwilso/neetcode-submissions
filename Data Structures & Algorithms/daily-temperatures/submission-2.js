class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const tempStack = []
        const res = new Array(temperatures.length).fill(0);;

        for (let i = 0; i < temperatures.length; i++){
            let currTemp = temperatures[i];
            while (tempStack.length > 0 && currTemp > tempStack[tempStack.length - 1][0]){
                const [prevTemp, prevIdx] = tempStack.pop();
                res[prevIdx] = i - prevIdx;
            }

            tempStack.push([currTemp, i])
        }

        return res;
    }
}
