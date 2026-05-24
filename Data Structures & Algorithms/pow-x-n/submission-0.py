class Solution:
    def myPow(self, x: float, n: int) -> float:
        def recurse(x, n):
            if x == 0:
                return 0
            if n == 0:
                return 1
            
            # instead of multiplying x by itself n times (O(n)),
            # we square the base and halve the exponent each call (O(log n))
            # e.g. 2^8 -> 4^4 -> 16^2 -> 256^1
            # so: 2 x 2 = 4 x 4 = 16 x 16 = 256
            res = recurse(x * x, n // 2)

            # if n is odd, we have a leftover x to multiply in (e.g. x^13 = x * x^12)
            # if n is even, squaring handles it cleanly — no leftover
            return x * res if n % 2 else res
        
        # handle negative exponents: x^-n = 1 / x^n
        res = recurse(x, abs(n))
        return res if n >= 0 else 1 / res