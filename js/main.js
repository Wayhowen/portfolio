window.onload = function consoleText() {
  const text = document.getElementById("console")
  const textToDisplay = text.textContent

  const underscore = document.getElementById("console-underscore")
  let visible = false

  text.textContent = ""
  text.style.visibility = "visible"

  // for (let i = 0; i < textToDisplay.length; i++) {
  //   text.textContent += textToDisplay[i];
  // }

  let i=0;
  setLetters()

  function setLetters() {
    setTimeout(function() {
      text.textContent += textToDisplay[i];
      i++;
      if (i < textToDisplay.length) {
        setLetters();
      }
    }, 100)
  }

  window.setInterval(function() {
    if (underscore.style.visibility === "visible") {
      underscore.style.visibility = "hidden"
    } else {
      underscore.style.visibility = "visible"
    }
  }, 400)
}
