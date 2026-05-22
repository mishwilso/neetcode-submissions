class Solution:
    def rob(self, nums: List[int]) -> int:
        # dp[i] = the amount of money you can rob if you end at house i 
        # if i <= 1 = the most money you can rob is either house[0] or house[1]
        # else dp[i] = dp[i] + dp[i - 2] where dp[i - 2] is the house two back,,,
        # but what if the house three back is better- is that possible? 


        # at each i i can either rob that house...or skip it to rob the house next to it
        # so dp[i] = max(dfs(i -1), nums[i] + dfs(i -2))

        dp = [-1 for _ in range(len(nums))]
        # dp[0] = nums[0]
        # dp[1] = nums[1]

        def dfs(n):
            if n < 0: return 0
            if dp[n] != -1: return dp[n]

            dp[n] = max(dfs(n - 1), nums[n] + dfs(n - 2))
            return dp[n]

        return dfs(len(nums) - 1)