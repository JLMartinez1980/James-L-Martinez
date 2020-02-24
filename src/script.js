
const globalModal = document.getElementById("globalModal");

// Get the button that opens the modal
const globalButton = document.getElementById("globalButton");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
globalButton.onclick = () => {
  globalModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  globalModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) {
    globalModal.style.display = "none";
  }
}
