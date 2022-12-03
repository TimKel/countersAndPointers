// add whatever parameters you deem necessary
function constructNote(msg, str) {
    let strLetters = {};
    let msgLetters = {};

    for(let char of str){
        strLetters[char] = ++strLetters[char] || 1;
    }

    for(let char of msg){
        msgLetters[char] = ++msgLetters[char] || 1;
    }

    for(let char in msgLetters){
        if(!strLetters[char]){
            return false;
        }
        if(msgLetters[char] > strLetters[char]){
            return false;
        }
    }

    return true;
}

module.exports = constructNote;