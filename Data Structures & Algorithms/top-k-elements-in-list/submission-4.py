class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        bucket = [[] for _ in range(len(nums))]
        freqCounter = Counter(nums)

        for i, cnt in freqCounter.items():
            bucket[cnt - 1].append(i)

        res = []
        for i in range(len(bucket)-1, -1, -1):
            res += bucket[i]
            if len(res) >= k:
                return res[:k]

        return res[:k]