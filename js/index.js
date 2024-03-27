function login() {
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const loginForm = document.querySelector(".login");
  const signupForm = document.querySelector(".signup");
    
  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
  loginForm.style.display = "block";
  signupForm.style.display = "none";
}

function signup() {
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const loginForm = document.querySelector(".login");
  const signupForm = document.querySelector(".signup");

  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
  signupForm.style.display = "block";
  loginForm.style.display = "none";
}

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