class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        memo = {}


        def recursive(i, j):
            # Case: Index out of bounds - escape
            if i == len(text1) or j == len(text2):
                return 0

            if (i, j) in memo:
                return memo[(i, j)]

            # Case: Index equal, increment both Index return that
            if text1[i] == text2[j]:
                memo[(i, j)] = 1 + recursive(i + 1, j + 1)
            else:
                memo[(i, j)] = max(recursive(i + 1, j), recursive(i, j + 1))
                
            return memo[(i, j)]

        #  start at 0 for both index
        return recursive(0, 0)