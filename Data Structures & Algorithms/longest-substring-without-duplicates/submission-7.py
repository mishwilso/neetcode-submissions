class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l = 0
        maxLen = 0
        idxMap = {}

        for r in range(len(s)):
            if s[r] in idxMap:
                l = max(idxMap[s[r]] + 1, l)
            idxMap[s[r]] = r
            maxLen = max(maxLen, len(s[l:r + 1]))

        return maxLen