document.addEventListener('DOMContentLoaded', function() {
  consoleText(['I am Davis Sneed', 'I am a Creative computer science student with an emphasis on software development and security programming with strong communication skills focused on delivering solutions to technical and everyday challenges.'], 'text', ['green', 'green', 'green']);
});

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);

  var messageIndex = 0; // Track the index of the current message

  function updateSecondMessage() {
    if (words.length >= 2) {
      words[1] = 'Your updated message here.'; // Replace this with the new message
    }
  }

  window.setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[messageIndex].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 500) // Faster interval here (e.g., 500 milliseconds)
    } else if (letterCount === words[messageIndex].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 500) // Faster interval here (e.g., 500 milliseconds)
    } else if (waiting === false) {
      target.innerHTML = words[messageIndex].substring(0, letterCount)
      letterCount += x;
    }
  }, 60) // Faster interval here (e.g., 60 milliseconds)

  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;
    } else {
      con.className = 'console-underscore'
      visible = true;
    }
  }, 200) // Faster interval here (e.g., 200 milliseconds)

  var secondMessageInterval = 40000; // 40 seconds in milliseconds

  // Set an interval to update the second message
  setInterval(function() {
    if (messageIndex === 1) {
      updateSecondMessage();
    }
  }, secondMessageInterval);
}
