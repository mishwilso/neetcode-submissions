class Solution:
    def isValid(self, s: str) -> bool:
        pMap = {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        }
        stack = []

        for paren in s:
            # If curr val in pMap
            # if stack not empty, pop and check if match.  if not return false
            # if stack empty, return false
            if paren in pMap:
                if not stack or pMap[paren] != stack.pop():
                    return False
            else: 
                stack.append(paren)
        
        return len(stack) == 0
