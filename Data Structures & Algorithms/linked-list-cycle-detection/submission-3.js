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
     * @return {boolean}
     */
    hasCycle(head) {
        let singleStep = head, doubleStep = head;
        let index = 0;
        while (true) {
            if (singleStep == doubleStep && index != 0) return true;
            if (singleStep.next) singleStep = singleStep.next;
            else return false;
            index++;
            if (doubleStep.next && doubleStep.next.next) doubleStep = doubleStep.next.next;
            else return false;
        }
    }
}
