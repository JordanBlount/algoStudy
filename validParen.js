/*
* Implementation of a Stack
*/
class Stack {

    _stack;
    _max;

    constructor() {
        this._stack = [];
        this._max = [];
    }

    push = item => {
        this._stack.push(item);
        let previousMax = this._max[this._max.length - 1]; 
        this._max.push(!previousMax || item > previousMax ? item : previousMax);
    }

    pop = () => {
        this._max.pop();
        return this._stack.pop();
    }

    peek = () => {
        return this._stack[this._stack.length - 1];
    }

    max = () => {
        return this._max[this._max.length - 1];
    }

    size = () => {
        return this._stack.length;
    }
}

const isValid = (s) => {
    if(s.length % 2 !== 0) return false; // Has to have an even number of characters

    let brackets = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }

    let stack = new Stack();

    for(let c of s) {
        if(brackets[c]) {
            stack.push(brackets[c])
        } else {
            // Essentially, this is say that if brackets[c] is ")", "]", "}", it is going to check what the previous value is currently in the Stack. It is going to remove the value using the pop method. Therefore, if {[]} is our example. If we are at "]", it is going to remove the value "[" and check to see if they are a match "[]" which removes them from the Stack. That leaves "{" in the Stack. Then we will check "}" which will check the Stack for the last value "{".
            if(stack.pop() !== c) return false
        }
    }

    return !stack.size();
}

console.log(isValid('()[]{}'));
