class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let tempStack = []
        let res = Array.from({length: temperatures.length}, () => 0);

        for (let i = 0; i < temperatures.length; i++){
            console.log(tempStack)
            let currTemp = temperatures[i];
            while (tempStack.length > 0 && currTemp > tempStack[tempStack.length - 1][0]){
                let [prevTemp, prevIdx] = tempStack.pop();
                res[prevIdx] = i - prevIdx;
            }

            tempStack.push([currTemp, i])
        }

        return res;
    }
}
