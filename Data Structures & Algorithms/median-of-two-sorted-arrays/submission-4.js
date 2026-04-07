class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
    let A = nums1;
    let B = nums2;

    if (A.length > B.length) [A, B] = [B, A];
    if (A.length == 1 && B.length == 2 && A[0] > B[1]) return B[1];

    const totalLength = A.length + B.length;
    const half = Math.floor(totalLength / 2);
    const isOddLength = totalLength % 2 == 1;
    if (A.length == 0) {
        if (isOddLength) return B[half]
        else return (B[half] + B[half-1])/2
    }

    let leftA = 0,
        rightA = A.length - 1;
    let leftB = 0,
        rightB = B.length - 1;

    let leftCount = 0;
    let currentMedian = Number;
    let closestToMedian = Number;
    while (leftCount < half) {
        const midA = Math.floor((leftA + rightA) / 2);
        const midB = Math.floor((leftB + rightB) / 2);

        if (A[midA] < B[midB]) {
            currentMedian = B[midB];
            leftCount += midA - leftA + 1;
            leftA = midA + 1;
            closestToMedian = Math.max(A[midA], B[midB - 1] || -Infinity);
            console.log(closestToMedian);
            if (leftCount + midB - leftB > half) {
                currentMedian = B[leftCount + midB - leftB - half];
                break;
            } else if (leftCount + midB - leftB == half) break;
        } else {
            currentMedian = A[midA];
            leftCount += midB - leftB + 1;
            leftB = midB + 1;
            closestToMedian = Math.max(B[midB], A[midA - 1] || -Infinity);
            console.log(closestToMedian);
            if (leftCount + midA - leftA > half) {
                currentMedian = A[leftCount + midA - leftA - half];
                break;
            } else if (leftCount + midA - leftA == half) break;
        }

        if (leftCount == half) break;
    }

    if (isOddLength) return currentMedian;
    else return (closestToMedian + currentMedian) / 2;
    }

}
