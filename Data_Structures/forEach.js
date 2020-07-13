//first draft

var evens = [0,2,4,6,8,10];

for (var i = 0; index < evens.length; i++) {
    console.log(`${evens[i]} is not odd!`);
    
}

//second draft

var evens = [0,2,4,6,8,10];

evens.forEach(even => {
    console.log(`${even} is not odd!`);
});

// with debugger

var evens = [0,2,4,6,8,10];

evens.forEach((even, index, array) => {
    debugger;
    console.log(`${even} is not odd!`);
});