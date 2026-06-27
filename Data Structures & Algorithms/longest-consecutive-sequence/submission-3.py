class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        
        maxSeq = 0
        hashSet = set(nums)

        for num in nums:
            if num - 1 not in hashSet:
                i = num
                seq = 1
                while i + 1 in hashSet:
                    seq += 1
                    i += 1
                maxSeq = max(maxSeq, seq)
        
        return maxSeq