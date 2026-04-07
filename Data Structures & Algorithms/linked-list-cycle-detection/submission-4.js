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
        while (doubleStep !== null && doubleStep.next !== null) {
            singleStep = singleStep.next;
            doubleStep = doubleStep.next.next;
            if (singleStep == doubleStep) return true;
        }
        return false;
    }
}
