class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let l = 0;

        for(let r = 1; r < prices.length; r++){
            const profit = prices[r] - prices[l];
            console.log(prices[l], " - ", prices[r], profit);

            if (profit < 0){
                l = r
            }
            maxProfit = Math.max(maxProfit, profit);
        }
        return maxProfit;
    }
}

// Time Complexity: O(n);
// Space: O(1)
