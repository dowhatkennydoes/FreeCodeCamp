var letters = []; // this is my stack

var word = window.prompt("What is your word?"); //User types this in the console

var rword = "";

var affirmation = " is a palindrome"

var disappointment = " is not a palindrome"

//put letters of word into stack
for(var i = 0; i < word.length; i++){
    letters.push(word[i]);
}


// pop off the stack in reverse order
for(var i = 0; i < word.length; i++){
    rword += letters.pop();
}

if(rword === word){
    console.log(word + `${affirmation}`);
}else{
    console.log(word + `${disappointment}`);
}