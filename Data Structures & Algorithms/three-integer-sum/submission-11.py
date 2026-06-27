class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res = []

        for i, curr in enumerate(nums):
            if curr > 0:
                break

            if i > 0 and curr == nums[i - 1]:
                continue

            left, right = i + 1, len(nums) - 1
            while left < right:
                total = curr + nums[left] + nums[right]
                if total > 0:
                    right -= 1
                elif total < 0:
                    left += 1
                else:
                    res.append([curr, nums[left], nums[right]])
                    right -= 1
                    left += 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
        
        return res