/**
 * First in, first out
 */
class Queue {

    _queue
    _max

    constructor() {
        this._queue = []
        this._max = []
    }

    dequeue() {
        // We are removing the first item in the queue. (Example: [2, 3, 4, 5] = [3, 4, 5] with 2 returned)
        this._max.shift();
        return this._queue.shift();
    }
    
    push = item => {
        // We add the current item to the end of the queue. 
        this._queue.push(item);
        
        // We are getting the value of the previous max item.
        let previousMax = this._max[this._max.length - 1];
        
        // We are checking to see if the previousMax is valid and then we are comparing it to the current item. If the current item is of greater value than the previous, we add it to the max array.
        this._max.push(!previousMax || item > previousMax ? item : previousMax);
    }

    peek = () => {
        // Gets the first value in the queue
        return this._queue[0];
    }

    size = () => {
        return this._queue.length;
    }
}

export default Queue;