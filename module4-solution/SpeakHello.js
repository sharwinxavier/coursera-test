// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
<<<<<<< HEAD
// var helloSpeaker =
(function(window){
	var helloSpeaker={};

=======
(function(window){ 
var helloSpeaker ={};
>>>>>>> 5d9e7b7456453b37feff85fd5456161b7f1ad103

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
<<<<<<< HEAD
helloSpeaker.speak=function speak(name) {
  console.log(speakWord + " " + name);
}
window.helloSpeaker=helloSpeaker;
})(window);

=======
  helloSpeaker.speak=function (name) {
  console.log(speakWord + " " + name);
}
window.helloSpeaker=helloSpeaker;

})(window);
>>>>>>> 5d9e7b7456453b37feff85fd5456161b7f1ad103
// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
