class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # Make array of values before
        preArray = [1] * len(nums)
        postArray = [1] * len(nums)

        for i in range(1, len(nums)):
            preArray[i] = preArray[i - 1] * nums[i - 1]

        prevVal = 1
        for i in range(len(nums) - 2, -1, -1):
            prevVal = prevVal * nums[i + 1]
            preArray[i] *= prevVal


        return preArray