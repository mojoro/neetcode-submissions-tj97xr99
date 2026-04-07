// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    //return index of target val in linked list
    llIndex(head, target) {
        let index = 0, currHead = head;
        while (currHead){
            if (currHead.val == target) return index;
            index++;
            currHead = currHead.next;
        }
        return null;
    }

    copyRandomList(head) {
        if (head == null) return null;
        const copy = new Node(head.val, null, null);
        if (head.next == null) return copy;
        const copyArr = [copy];
        let currHead = head.next
        let currCopy = copy;
        while (currHead.next) {
            currCopy.next = new Node(currHead.val, null, null);
            currHead = currHead.next;
            currCopy = currCopy.next;
            copyArr.push(currCopy);
        }

        currCopy.next = new Node(currHead.val, null, null);
        copyArr.push(currCopy.next);

        currHead = head;
        let index = 0;
        while (currHead){
            if (currHead.random != null) {
                const randIndex = this.llIndex(head, currHead.random.val);
                copyArr[index].random = copyArr[randIndex];
            }
            index++;
            currHead = currHead.next;
        }
        return copy
    }
}
