const twoSum = (nums, target) => {
    let storedNums = {}
    for(let i = 0; i < nums.length; i++) {
        // We are checking to see what value we need to add to nums[i] to get our target
        let requiredNum = target - nums[i];
        // We are checking to see if our "HashMap" already has the required number in it (as a key)
        if(storedNums.hasOwnProperty(requiredNum)) {
            // If it does, we get its index along with the index of the current number. We return them as an array
            return [storedNums[requiredNum], i];
        }
        // We are going to store the number as the key and its index as the value
        storedNums[nums[i]] = i;
    }
}

console.log(twoSum([2, 4, 6, 9], 6));