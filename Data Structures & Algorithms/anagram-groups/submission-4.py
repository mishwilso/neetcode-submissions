class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        res = defaultdict(list)

        for word in strs:
            key = [0 for _ in range(26)]
            for ch in word:
                key[ord(ch) - ord('a')] += 1
            
            res[tuple(key)].append(word)

        return list(res.values())