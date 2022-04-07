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

export default Stack;