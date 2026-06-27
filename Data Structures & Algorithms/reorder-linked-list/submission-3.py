# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:

        if not head or not head.next: 
            return
        
        slow, fast = head, head

        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next


        list2 = None
        curr = slow

        while curr:
            temp = curr.next
            curr.next = list2 
            list2 = curr
            curr = temp

        curr = head

        while curr and list2.next:
            temp = curr.next
            curr.next = list2
            list2 = list2.next
            curr = curr.next
            curr.next = temp
            curr = curr.next
        

        

