//topnavigatie________________________________________________
const topnavElement = document.querySelector(".icon");
topnavElement.addEventListener("click", () => {
  topnav();
});

function topnav() {
  if (document.querySelector(".formShow")) {
    clsForm();
  }
  if (!document.querySelector(".sidenavOpen")) {
    document.querySelector(".topnav").classList.toggle("topnavresponsive");
  } else {
    sidenav();
    document.querySelector(".topnav").classList.toggle("topnavresponsive");
  }
}
//Inlogformulier_______________________________________________
function form() {
  let frm = document.querySelector(".topnavresponsive");

  if (frm) {
    frm.classList.remove("topnavresponsive");
    document.querySelector(".form").classList.toggle("formShow");
  } else {
    document.querySelector(".form").classList.toggle("formShow");
  }
}

function clsForm() {
  document.querySelector(".form").classList.toggle("formShow");
}

const sidenavElementOpen = document.querySelector(".btn");
sidenavElementOpen.addEventListener("click", () => {
  sidenav();
});

const sidenavElementClose = document.querySelector(".closebtn");
sidenavElementClose.addEventListener("click", () => {
  sidenav();
});

function sidenav() {
  if (document.querySelector(".formShow")) {
    clsForm();
  }
  if (!document.querySelector(".topnavresponsive")) {
    document.querySelector(".sidenav").classList.toggle("sidenavOpen");
    document.querySelector("main").classList.toggle("main");
    document.querySelector("header").classList.toggle("header");
  } else {
    topnav();
    document.querySelector(".sidenav").classList.toggle("sidenavOpen");
    document.querySelector("main").classList.toggle("main");
    document.querySelector("header").classList.toggle("header");
  }
}

//Copy_______________________________________________________
let btns = document.querySelectorAll(".code-wrapper button");

btns.forEach(function (i) {
  i.addEventListener("focus", () => {
    i.parentElement.lastElementChild.classList.toggle("show-message");
  });
  i.addEventListener("blur", () => {
    i.parentElement.lastElementChild.classList.toggle("show-message");
  });

  i.addEventListener("click", () => {
    textToCopy = i.previousElementSibling.firstChild.innerText;
    navigator.clipboard.writeText(textToCopy);
    i.nextElementSibling.classList.toggle("show-message");
    setTimeout(() => {
      i.nextElementSibling.classList.toggle("show-message");
    }, 2500);
  });
});
//name_____________________________________
const focusElementName = document.querySelector('input[type="text"]');
if (focusElementName) {
  focusElementName.addEventListener("focus", () => {
    focusElementName.parentElement.lastElementChild.classList.toggle("vis");
  });

  focusElementName.addEventListener("blur", () => {
    focusElementName.parentElement.lastElementChild.classList.toggle("vis");
  });
  //email_____________________________________
  const focusElementEmail = document.querySelector('input[type="email"]');
  focusElementEmail.addEventListener("focus", () => {
    focusElementEmail.parentElement.lastElementChild.classList.toggle("vis");
  });

  focusElementEmail.addEventListener("blur", () => {
    focusElementEmail.parentElement.lastElementChild.classList.toggle("vis");
  });
  //submit__________________________________
  const focusElementSubmit = document.querySelector(".submit");
  focusElementSubmit.addEventListener("focus", () => {
    focusElementSubmit.parentElement.lastElementChild.classList.toggle("vis");
  });

  focusElementSubmit.addEventListener("blur", () => {
    focusElementSubmit.parentElement.lastElementChild.classList.toggle("vis");
  });
}
