class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxP = 0
        buy = prices[0]

        for price in prices:
            profit = price - buy
            maxP = max(profit, maxP)

            buy = min(buy, price)

        return maxP