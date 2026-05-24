class Solution:
    def isHappy(self, n: int) -> bool:
        def sumSqrs(n):
            val = 0
            while n:
                val += (n % 10)**2
                n //= 10
            return val

        seen = set()
        while n not in seen and n != 1:
            seen.add(n)
            n = sumSqrs(n)
            

        print(n)
        return n == 1             