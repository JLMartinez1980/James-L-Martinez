createTheModal = () => {
  const globalModal = document.getElementById("modal");

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  globalButton.onclick = () => {
    modal.style.display = "block";
    const ol = document.getElementById("modalInformation");
    const li = document.createElement("li");
    ol.appendChild(li);
    const globalInfo = document.createTextNode('Starting March 29, 2020');
    const globalGoal = document.createTextNode('DEMO PROJECT')
    li.append(globalInfo);
    li.append(globalGoal);
  }

  wozButton.onclick = () => {
    modal.style.display = "block";
    const wozOl = document.getElementById("wozModalInformation");
    const wozLi = document.createElement("li");
    wozOl.appendChild(wozLi);
    const wozInfo = document.innerHTML('Graduated November 5, 2018 With a full stack Certificate');
    wozLi.append(wozInfo);
  }

  mpgButton.onclick = () => {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target == modal) {
      globalModal.style.display = "none";
    }
  }
}

let modalInformation = document.getElementById("modalInformation")
console.log('modalInformation', modalInformation);


const globalButton = document.getElementById("globalButton");
globalButton.addEventListener('click', createTheModal);

const wozButton = document.getElementById("wozButton");
wozButton.addEventListener('click', createTheModal);

const mpgButton = document.getElementById("marketPlace");
mpgButton.addEventListener('click', createTheModal);
