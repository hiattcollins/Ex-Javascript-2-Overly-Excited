// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

console.log(sentence);

// ********CHALLENGE function********* //


function addExcitement (theWordArray) {
    	
    	let outputSentence = "";
    	let exclamationPts = "";

    for (let i = 0; i < theWordArray.length; i++) {

    	if (i === 0) {
    		outputSentence = theWordArray[i];
    	} else if ( ([i] + 1) % 3 === 0 ) {

    		exclamationPts = "";

    		for (let j = 0; j < (i / 3); j++) {
    			exclamationPts = exclamationPts + "!";
    		}

    		outputSentence = outputSentence + " " + theWordArray[i] + exclamationPts;

    	} else {
    		outputSentence = outputSentence + " " + theWordArray[i];
    	}

    	console.log(outputSentence);

    }

}

addExcitement(sentence);


// ****** Exercise Function ********** //

// function addExcitement (theWordArray) {
    	
//     	let outputSentence = "";

//     for (let i = 0; i < theWordArray.length; i++) {

//     	if (i === 0) {
//     		outputSentence = theWordArray[i];
//     	} else if ( ([i] + 1) % 3 === 0 ) {
//     		outputSentence = outputSentence + " " + theWordArray[i] + "!";
//     	} else {
//     		outputSentence = outputSentence + " " + theWordArray[i];
//     	}

//     	console.log(outputSentence);

//     }

// }

// addExcitement(sentence);




//       Write a `for` loop that iterates over the array argument and
//       outputs the words.
     

// // Invoke the function and pass in the array
// addExcitement(sentence)
