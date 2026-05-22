class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        preMap = [[] for _ in range(numCourses)]
        for crs, pre in prerequisites:
            preMap[crs].append(pre)

        in_progress, visit = set(), set()
        output = []

        def validSchedule(crs):
            if crs in in_progress: return False
            if crs in visit: return True

            in_progress.add(crs)
            
            for pre in preMap[crs]:
                if not validSchedule(pre):
                    return False

            in_progress.remove(crs)
            visit.add(crs)
            output.append(crs)

            return True

        for crs in range(numCourses):
            if not validSchedule(crs):
                return []
        
        return output
        