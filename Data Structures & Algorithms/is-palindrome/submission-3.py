class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.replace(" ", "").lower()
        s = "".join(ch for ch in s if ch.isalnum())
        print(s)
        left, right = 0, len(s) - 1
        while left <= right:
            if s[left] != s[right]:
                return False
            left += 1
            right -= 1

        return True   
