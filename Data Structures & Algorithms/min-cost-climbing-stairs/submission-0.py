class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        # Similar to regular climbing stairs 
        # base cases: len(cost) == 0 | 0 or len(cost) == 1 | cost[0]
        # base case: len(cost) == 2 | min(cost[0], cost[1])

        minCost = {}
        minCost[0] = cost[0]
        minCost[1] = cost[1]

        def climbStairs(i):
            if i in minCost: 
                print(f"Min Cost to get to step {i} is {minCost[i]}")
                return minCost[i]

            minCost[i] = cost[i] + min(climbStairs(i - 1), climbStairs(i - 2))
            print(f"Min Cost to get to step {i} is {minCost[i]}")
            return minCost[i]

        n = len(cost)
        climbStairs(n - 1)
        return min(minCost[n - 1], minCost[n - 2])

