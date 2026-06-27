class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        maxStr = 0
        have = {}
        l, r = 0, 0

        while r < len(s):
            if s[r] in s[l:r]:
                l = have[s[r]] + 1
            have[s[r]] = r
            r += 1
            maxStr = max(maxStr, len(s[l:r]))

        return maxStr


        