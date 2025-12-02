function sum(a,b) {
    return a+b;    
}

function rest(a,b) {
    return a-b;    
}

function multi(a,b) {
    return a*b;    
}

function div(a,b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a/b;    
}

module.exports = {sum, rest, multi, div};