class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        bucket = [[] for _ in range(len(nums))]
        count = collections.Counter(nums)

        for num, cnt in count.items():
            bucket[cnt - 1].append(num)
        
        res = []
        for i in range(len(bucket)-1, -1, -1):
            res += bucket[i]
            if len(res) >= k:
                return res[:k]
        return res[:k]