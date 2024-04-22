//login & signup
function logIn() {
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const forgotBtn = document.getElementById("forgot-btn");
  const loginForm = document.querySelector(".login");
  const signupForm = document.querySelector(".signup");
  const forgotForm = document.querySelector(".forgot");
    
  loginBtn.classList.add("active");
  forgotBtn.classList.remove("active");
  signupBtn.classList.remove("active");
  loginForm.style.display = "block";
  forgotForm.style.display = "none";
  signupForm.style.display = "none";
}
function signUp() {
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const forgotBtn = document.getElementById("forgot-btn");
  const loginForm = document.querySelector(".login");
  const signupForm = document.querySelector(".signup");
  const forgotForm = document.querySelector(".forgot");

  signupBtn.classList.add("active");
  forgotBtn.classList.remove("active");
  loginBtn.classList.remove("active");
  signupForm.style.display = "block";
  loginForm.style.display = "none";
  forgotForm.style.display = "none";
}

function forgotPass() {
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const forgotBtn = document.getElementById("forgot-btn");
  const loginForm = document.querySelector(".login");
  const signupForm = document.querySelector(".signup");
  const forgotForm = document.querySelector(".forgot");

  forgotBtn.classList.add("active");
  signupBtn.classList.remove("active");
  loginBtn.classList.remove("active");
  forgotForm.style.display = "block";
  signupForm.style.display = "none";
  loginForm.style.display = "none";
}

//fade emotion buttons
function fade() {
    document.getElementById("highNegative").style.backgroundColor="green";
}

let emotion = document.querySelector(".emotion-button");

emotion.addEventListener("click", () => {
    emotion.classList.add("fade");
});

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
//move shop page
  const productContainers = [...document.querySelectorAll('.product-container')];
  const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
  const preBtn = [...document.querySelectorAll('.pre-btn')];

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
  })

  function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}