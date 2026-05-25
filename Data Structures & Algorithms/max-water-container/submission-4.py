class Solution:
    def maxArea(self, heights: List[int]) -> int:
        maxA = 0

        left, right = 0, len(heights) - 1

        while left < right:
            w = right - left
            h = min(heights[left], heights[right])
            print(f"{w} {h}")
            maxA = max(maxA, w * h)
            
            if heights[left] < heights[right]:
                left += 1
            else:
                right -= 1

        return maxA