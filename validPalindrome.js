/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    
    let arr = s.split('');
    let result = [];
    
    let alphaNumeric = "0123456789abcdefghijklmnopqrstuvwxyz";

    for(let i of arr) {
        if(alphaNumeric.includes(i.toLowerCase())) {
            result.push(i.toLowerCase());
        }
    }
    
    return result.join('') === result.reverse().join('')
    
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));