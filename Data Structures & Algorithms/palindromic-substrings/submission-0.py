class Solution:
    def countSubstrings(self, s: str) -> int:

        count = 0

        def expand(s, l, r):
            count = 0
            while l >= 0 and r < len(s) and s[l] == s[r]:
                l -= 1
                r += 1
                count += 1
            return count

        for i in range(len(s)):
            count += expand(s, i, i)
            count += expand(s, i, i + 1)

        return count