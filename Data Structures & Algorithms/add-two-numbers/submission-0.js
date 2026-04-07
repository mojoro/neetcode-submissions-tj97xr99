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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let curr1 = l1, curr2 = l2;
        let carry = 0;
        let sumHead = new ListNode();
        let sumNode = sumHead;
        while (curr1 || curr2 || carry) {

            if (!curr1) curr1 = {'val': 0}
            if (!curr2) curr2 = {'val': 0}
            
            const sum = curr1.val + curr2.val + carry;

            if (sum >= 10) {
                carry = 1;
                sumNode.val = sum - 10;
            }
            else {
                carry = 0
                sumNode.val = sum;
            };
            

            if (!curr1.next && !curr2.next && !carry) break;
            sumNode.next = new ListNode();
            sumNode = sumNode.next;
            curr1 = curr1.next;
            curr2 = curr2.next;
        }
        sumNode = null;
        return sumHead;
    }
}
