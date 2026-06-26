class Solution:

    def encode(self, strs: List[str]) -> str:
        res = ""
        for s in strs:
            res += f'{len(s)}#{s}'

        print(res)
        return res 

    def decode(self, s: str) -> List[str]:
        res = []
        i = 0
        while i < len(s):
            end = i
            while s[end] != '#':
                end += 1
            
            length = int(s[i : end])

            i = end + 1
            res.append(s[i: i + length])
            i = i + length
            
        return res