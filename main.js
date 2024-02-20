const a = document.getElementById("moreabtme"),
  b = document.getElementById("latestac"),
  c = document.getElementById("myprojects"),
  createPopup = function() {
    if (popUpExist) {
      // don't create new one
    } else {
      newPopup = document.createElement("div");
      newPopup.id = "popUp";
      newPopup.innerHTML = `<div>
            <p id="nameofpage"></p>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" id="closeButton" viewBox="0 0 512 512">
              <path fill="#fff" d="M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240s240-107.45 240-240S388.55 16 256 16m0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256S156.59 76 256 76m-80.625 60c-.97-.005-2.006.112-3.063.313v-.032c-18.297 3.436-45.264 34.743-33.375 46.626l73.157 73.125l-73.156 73.126c-14.63 14.625 29.275 58.534 43.906 43.906L256 299.906l73.156 73.156c14.63 14.628 58.537-29.28 43.906-43.906l-73.156-73.125l73.156-73.124c14.63-14.625-29.275-58.5-43.906-43.875L256 212.157l-73.156-73.125c-2.06-2.046-4.56-3.015-7.47-3.03z" />
            </svg>
            <p id="contentOfPop"></p>
          </div>`
      document.body.appendChild(newPopup);
      popUpExist = true;
    }
    eventClose()
  };
let projectsByMe = `None`;
let moreAboutMe = `None`;
let latestActivities = `None`;
let popUpExist = false;


a.addEventListener("click", () => {
  createPopup()
  let getPopup = document.getElementById("popUp");
  document.getElementById("nameofpage").innerHTML = "About Me";
  document.getElementById("contentOfPop").innerHTML = moreAboutMe;

  setTimeout(() => { getPopup.style.opacity = 1; getPopup.style.scale = 1; }, 100)
})

b.addEventListener("click", () => {
  createPopup()
  let getPopup = document.getElementById("popUp");
  document.getElementById("nameofpage").innerHTML = "Latest Activities";
  document.getElementById("contentOfPop").innerHTML = latestActivities;
  setTimeout(() => { getPopup.style.opacity = 1; getPopup.style.scale = 1; }, 100)
})

c.addEventListener("click", () => {
  createPopup()
  let getPopup = document.getElementById("popUp");
  document.getElementById("nameofpage").innerHTML = "My Projects";
  document.getElementById("contentOfPop").innerHTML = projectsByMe;
  setTimeout(() => { getPopup.style.opacity = 1; getPopup.style.scale = 1; }, 100)
});

function eventClose() {
  document.getElementById("closeButton").addEventListener("click", () => {
    let getPopup = document.getElementById("popUp");
    getPopup.style.opacity = 0;
    getPopup.style.scale = 0.5;
    setTimeout(() => {
      getPopup.remove()
      popUpExist = false;
    }, 501);
  })
}