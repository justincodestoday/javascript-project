// Problem 3
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

let list2 = new ListNode(1);

let list3 = new ListNode(1);
list3.next = new ListNode(2);
// Solution 1
// Time: O(n)
// Space: O(n)
// let removeNthFromEnd = function (head, n) {
//     // Infinity represents positive infinity,
//     // -Infinity represents negative infinity
//     let dummyHead = new ListNode(-Infinity);
//     dummyHead.next = head;
//     let resultHead = dummyHead;

//     let tail = head;
//     let current = head;
//     let previous = dummyHead;

//     for (let i = 0; i < n; i++) {
//         tail = tail.next;
//     }

//     while (tail) {
//         tail = tail.next;
//         current = current.next;
//         previous = previous.next;
//     }

//     previous.next = current.next;

//     return resultHead.next;
// };

// Solution 2
// Time: O(n)
// Space: O(n)
let removeNthFromEnd = function (head, n) {
    let tail = head,
        current = head;
    for (let i = 0; i < n; i++) {
        tail = tail.next;
    }
    // if tail is null, just return head.next
    if (!tail) return head.next;
    // using tail.next instead of tail would save one step
    while (tail.next) tail = tail.next, current = current.next;
    current.next = current.next.next;
    return head;
};

console.log(removeNthFromEnd(list, 2)); //[1,2,3,5]
console.log(removeNthFromEnd(list2, 1)); //[]
console.log(removeNthFromEnd(list3, 1)); //[1]