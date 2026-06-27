class Solution:
    def isValid(self, s: str) -> bool:
        pMap = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        stack = []
        for ch in s:
            
            if ch in pMap:
                if not stack or stack.pop() != pMap[ch]:
                    return False
            else:
                stack.append(ch)

        return len(stack) == 0