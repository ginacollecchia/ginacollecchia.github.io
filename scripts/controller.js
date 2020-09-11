var typewriterContainer;
// var typewriterAudio;

var setup = function() {
  typewriterContainer = document.getElementById("typewriter");
  // typewriterAudio = document.getElementById("type");
  animate(0);
}

var string = "gina collecchia's website.";
var timing = 0.1; // in seconds

var animate = function(idx) {
  if (idx >= string.length) return;
  setTimeout(function(){
    /* typewriterAudio.pause();
    typewriterAudio.currentTime = 0;
    typewriterAudio.play(); */
    typewriterContainer.innerText = string.slice(string.length - idx - 1);
    if (idx < string.length) animate(idx + 1);
  }, timing * 1000)
}

