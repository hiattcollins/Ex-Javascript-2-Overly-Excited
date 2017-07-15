// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

console.log(sentence);




// // The addExcitement function should accept the array as the sole argument

// function addExcitement (theWordArray) {
    	
    	let outputSentence = "";

    for (let i = 0; i < sentence.length; i++) {

    	if (i === 0) {
    		outputSentence = sentence[i];
    	} else if ( ([i] + 1) % 3 === 0 ) {
    		outputSentence = outputSentence + " " + sentence[i] + "!";
    	} else {
    		outputSentence = outputSentence + " " + sentence[i];
    	}

    	console.log(outputSentence);

    }

// }



//       Write a `for` loop that iterates over the array argument and
//       outputs the words.
     

// // Invoke the function and pass in the array
// addExcitement(sentence)
