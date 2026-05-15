/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        // Step one: find the middle
        let slow = head;
        let fast = head;

        while(fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        // Reorder the list
        let prev = null, curr = slow.next;
        slow.next = null; // 
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        //Merge lists - prev and head
        let first = head, second = prev;
        while(second){
            let tmp1 = first.next; // hold next nodes in temp
            let tmp2 = second.next;

            first.next = second; // first.next -> second 
            second.next = tmp1; // second.next -> temp1

            first = tmp1; // first -> temp1
            second = tmp2; // second -> temp2

            // two lists
            // first: head -> second -> temp1
            // second: temp2
        }

        return head;
    }
}
