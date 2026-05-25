class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        output = []

        for i in range(len(nums)):
            a = nums[i]
            if a > 0:
                break

            if i > 0 and a == nums[i - 1]:
                continue

            left, right = i + 1, len(nums) - 1
            while left < right:
                total = a + nums[left] + nums[right]
                if total > 0:
                    right -= 1
                elif total < 0:
                    left += 1
                else:
                    output.append([a, nums[left], nums[right]])
                    right -= 1
                    left += 1 
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1 


        return output