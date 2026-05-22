class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1: return nums[0]

        def robHouse(nums):
            dp = [-1 for _ in range(len(nums))]

            def dfs(n):
                if n < 0: return 0
                if dp[n] != -1: return dp[n]

                dp[n] = max(dfs(n - 1), nums[n] + dfs(n - 2))
                return dp[n]

            return dfs(len(nums) - 1)

        return max(robHouse(nums[:-1]), robHouse(nums[1:]))

