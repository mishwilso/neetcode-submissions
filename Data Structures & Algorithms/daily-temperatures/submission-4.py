class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0 for _ in range(len(temperatures))]
        stack = []

        for i in range(len(temperatures)):
            # while curr temp is wamer than stack topm update it the index
            while(len(stack) > 0 and temperatures[i] > temperatures[stack[-1]]):
                prevIdx = stack.pop()
                res[prevIdx] = i -prevIdx
            
            # add curr day to stack, to find a day warmer
            stack.append(i)
        return res