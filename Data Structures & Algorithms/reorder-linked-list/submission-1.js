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

        // grab second hald of list, and reverse it
        // end vals in front, start vals in back
        let first = head;
        let second = this.reverseList(slow.next);

        slow.next = null; // cut of mid;

        while (second){  
            let tmp1 = first.next;
            let tmp2 = second.next;

            first.next = second; // point to head of second
            second.next = tmp1; // have second point to tmp1

            first = tmp1; // move first head, forward
            second = tmp2; // give second the rest of list 2

            console.log(head);
        }

        return head;
    }

    reverseList(head) {
        let curr = head;
        let prev = null;

        while (curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
}
