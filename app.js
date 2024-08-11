const arr = [1, 2, 3, 5, 6];
const rotations = 3;
// custom logic
for (let i = 1; i <= rotations; i++) {
    const lastElement = arr[arr.length - 1];
    for (let j = arr.length - 1; j >= 0; j--) {
        arr[j] = arr[j - 1];
    }
    arr[0] = lastElement;
}
console.log('Using Loops');
console.log(arr);

console.log('Using Shift Method');
const arr1 = [1, 2, 4, 5, 7];
for (let i = 0; i < rotations; i++) {
    const prevElement = arr1[arr1.length - 1];
    arr1.length = arr1.length - 1;
    arr1.unshift(prevElement);
}
console.log(arr1);
