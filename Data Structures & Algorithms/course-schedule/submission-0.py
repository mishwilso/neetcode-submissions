class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        preqMap = [[] for _ in range(numCourses)]
        for course, preReq in prerequisites:
            preqMap[course].append(preReq)

        visited = set()

        def dfs(course):
            # Case: Course already visited
            if course in visited:
                return False

            visited.add(course)
            for preReq in preqMap[course]:
                # If false dfs return false
                if not dfs(preReq):
                    return False
                
            visited.remove(course)
            return True

        for course in range(numCourses):
            if not dfs(course):
                return False
        
        return True