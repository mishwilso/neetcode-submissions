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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {

        const dummy = new ListNode(0, head);

        let groupPrev = dummy; // this is the beggining of our list :)
        
        //break out when we kind find the kth Node
        while(true){
            let kth = this.getKthNode(groupPrev, k);
            
            // if kth is null, we dont have a kth node- so exit the loop
            if (kth === null){
                break;
            }
            let prev = kth.next;
            let curr = groupPrev.next;

            let groupNext = kth.next;            

            while(curr !== groupNext) {
                let nextTemp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = nextTemp;
            }

            let temp = groupPrev.next;
            groupPrev.next = prev;
            groupPrev = temp;
            console.log(groupPrev.val);

        }

        return dummy.next;



    }

    getKthNode(groupPrev, k){
        let curr = groupPrev;
        while(curr && k > 0){
            curr = curr.next;
            k--;
        }

        return curr; // returns the kth node or null if no such node
    }
}

// High Level
// Find the kth node of the group
// Isolate group
// Reverse group
// connect it back to the list
