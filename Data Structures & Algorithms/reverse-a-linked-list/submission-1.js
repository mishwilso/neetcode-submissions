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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null; // our new head
        let curr = head;

        while(curr !== null){
            let next = curr.next;
            curr.next = prev; // curr now points to prev (the val on the left)
            prev = curr; // prev becomes curr, as we go down the line
            curr = next; // and curr becomes the next node
        }

        return prev;

    }
}
