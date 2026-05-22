class Solution:
    def longestPalindrome(self, s: str) -> str:
        
        memo = {}
        output = ""

        def expand(s, l, r):   
            while l >= 0 and r < len(s) and s[l] == s[r]:
                l -= 1
                r += 1
            # Add 1 to l, because we start at 0
            return s[l + 1 : r]
            

        
        for i in range(len(s)):
            odd = expand(s, i, i)
            even = expand(s, i, i + 1)
            output = max(output, odd, even, key=len)

        return output
