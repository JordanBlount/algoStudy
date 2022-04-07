const array1 = [3, 4, 7, 8, 10, 11];
const array2 = [-1, 1, 5, 9, 12, 14];

const mergeTwo = (arr1 = [], arr2 = []) => {
    let result = [];

    // This will end when one of the two arrays length is equal to 0
    while(arr1.length && arr2.length) {
        // We are comparing first two items of each array to find out which is smaller.
        // The smallest will get added to our "result" array
        let next = (arr1[0] < arr2[0]) ? arr1.shift() : arr2.shift()
        result.push(next);
    }

    // We will then check to see which array still has items in it. That array will be added to the end
    // of our result array
    if(arr1.length) {
        result = result.concat(arr1)
    } else if(arr2.length) {
        result = result.concat(arr2);
    }
    
    return result;
}

console.log("Sorted List:", mergeTwo(array1, array2));

