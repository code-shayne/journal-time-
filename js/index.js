//login & signup
function logIn() {
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const loginForm = document.querySelector(".login");
  const signupForm = document.querySelector(".signup");
    
  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
  loginForm.style.display = "block";
  signupForm.style.display = "none";
}
function signUp() {
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const loginForm = document.querySelector(".login");
  const signupForm = document.querySelector(".signup");

  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
  signupForm.style.display = "block";
  loginForm.style.display = "none";
}
//forgot password
const modal = document.getElementById("forgot-password-modal");
const span = document.getElementsByClassName("close")[0];
const forgotPasswordLink = document.querySelector(".login .forgot a");
forgotPasswordLink.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "block";
});
span.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
const forgotPasswordForm = document.getElementById("forgot-password-form");
forgotPasswordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("forgot-password-email").value;
  const newPassword = document.getElementById("forgot-password-password").value;
  alert(`Email: ${email}\nNew Password: ${newPassword}`);
  forgotPasswordForm.reset();
});

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

const themeToggle = document.getElementById('theme-toggle');
        
            function changeColor() {
                document.documentElement.style.setProperty("--background-color", '#EECFD4');
                document.documentElement.style.setProperty("--prompt-container-bgcolor", '#AAC0AA');
                document.documentElement.style.setProperty("--header-bgcolor", '#AD9FBC');
                document.documentElement.style.setProperty("--outline-color", '#859785');
                document.documentElement.style.setProperty("--hr-color", '#837472');
                document.documentElement.style.setProperty("--button-textcolor", '#fff');
                document.documentElement.style.setProperty("--button-hovercolor", '#000');
                document.documentElement.style.setProperty("--prompt-color", '#938482');
                // document.documentElement.style.setProperty("--filter-title-bgcolor", '#EECFD4');
            }