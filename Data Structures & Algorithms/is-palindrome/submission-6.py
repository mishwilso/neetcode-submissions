class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleanS = "".join([ch.lower() for ch in s if ch.isalnum()])
        
        return cleanS == cleanS[::-1]