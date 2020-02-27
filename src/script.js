createTheModal = () => {
  const globalModal = document.getElementById("modal");

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  span.onclick = () => {
    modal.style.display = "none";
    console.log('modal', modal);
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target == modal) {
      globalModal.style.display = "none";
    }
  }
  console.log('window', window);
}

globalInfo = () => {

  modal.style.display = "block";
  //Create Basic information about school
  const createDiv = document.createElement('div');
  const info = document.getElementById("modalInformation");
  const paragraph = document.createElement("p");
  createDiv.appendChild(paragraph);
  const globalInfo = document.createTextNode('Starting March 29, 2020');
  info.append(globalInfo);
  //Link to final Project
  const linkToFinalProjectDiv = document.createElement('div')
  const linkInfo = document.getElementById("linkToProject");
  const linkToProject = document.createElement("a");
  linkToProject.setAttribute('href', "https://github.com/JLMartinez1980");
  linkToProject.innerText = 'final Project';
  linkToFinalProjectDiv.appendChild(linkToProject);
  linkInfo.append(linkToProject);
  console.log("createDiv", createDiv);
}

const globalButton = document.getElementById("globalButton");
globalButton.addEventListener('click', globalInfo);


bethelInfo = () => {

  modal.style.display = "block";
  //Create Basic information about school
  const date = document.getElementById("modalInformation");
  const globalInfo = document.createTextNode('April 2018- November 2018');
  date.append(globalInfo);

  const info = document.createElement("P")
  const text = document.createTextNode('Received a certificate in the full-stack' + 
  'program focusing on JavaScript. Covered a number of different topics both' +
  'related to front-end as well as the back end of development.');
  info.appendChild(text);
  date.append(info);





  //Link to final Project
  const linkToFinalProjectDiv = document.createElement('div')
  const linkInfo = document.getElementById("linkToProject");
  const linkToProject = document.createElement("a");
  linkToProject.setAttribute('href', "https://github.com/JLMartinez1980");
  linkToProject.innerText = 'final Project';
  linkToFinalProjectDiv.appendChild(linkToProject);
  linkInfo.append(linkToProject);


}

const bethelButton = document.getElementById("bethelButton");
bethelButton.addEventListener('click', bethelInfo);

const mpgButton = document.getElementById("marketPlace");
mpgButton.addEventListener('click', createTheModal);
