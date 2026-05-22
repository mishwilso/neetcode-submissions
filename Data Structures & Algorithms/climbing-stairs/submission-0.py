class Solution:
    def climbStairs(self, n: int) -> int:
        # To get to stair n, you got there by taking either 1 step or 2 steps...
        # and you got the step prior by taking 1 step or 2 steps, and so on and so forth
        # we want to count the number of ways we can get to step n - so we combine the number of ways it takes to get
        # there from 1 step before or 2 step before and the number of ways it takes to get to those prior steps.
        # dp[i] = number of distinct ways to climp to step[i]
        # base case: n <= 1 = 1
        # recurrence: step[i] = climbStairs(i - 1) + climbStairs(i + 2)

        step = {}

        def recurrence(i):
             if i in step: return step[i]
             if i <= 1: return 1

             step[i] = recurrence(i - 1) + recurrence(i - 2)
             return step[i]

        # return recurrence(n)

        def iterative(i):
            if i <= 1: return 1
            a, b = 1, 1

            for _ in range(2, i + 1):
                a, b = b, a + b

            return b

        return iterative(n)
