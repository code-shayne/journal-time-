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

function fade(button) {
    button.style.visibility="hidden";
    const buttons = document.querySelectorAll('.emotion-button');
    buttons.forEach(btn => {
        if (btn !== button && btn.style.visibility === "hidden") {
            btn.style.visibility = "visible";
        }
    });
}

function highNegList(button) {
    const list1 = document.querySelectorAll('.highNeg-list');
    const list2 = document.querySelectorAll('.highPos-list');
    const list3 = document.querySelectorAll('.lowNeg-list');
    const list4 = document.querySelectorAll('.lowPos-list');
    list1.forEach(item => {
        item.style.visibility = "visible";
    });
    list2.forEach(item => {
        item.style.visibility = "hidden";
    })
    list3.forEach(item => {
        item.style.visibility = "hidden";
    })
    list4.forEach(item => {
        item.style.visibility = "hidden";
    })
}
function highPosList(button) {
    const list1 = document.querySelectorAll('.highNeg-list');
    const list2 = document.querySelectorAll('.highPos-list');
    const list3 = document.querySelectorAll('.lowNeg-list');
    const list4 = document.querySelectorAll('.lowPos-list');
    list2.forEach(item => {
        item.style.visibility = "visible";
    });
    list1.forEach(item => {
        item.style.visibility = "hidden";
    })
    list3.forEach(item => {
        item.style.visibility = "hidden";
    })
    list4.forEach(item => {
        item.style.visibility = "hidden";
    })
}
function lowNegList(button) {
    const list1 = document.querySelectorAll('.highNeg-list');
    const list2 = document.querySelectorAll('.highPos-list');
    const list3 = document.querySelectorAll('.lowNeg-list');
    const list4 = document.querySelectorAll('.lowPos-list');
    list3.forEach(item => {
        item.style.visibility = "visible";
    });
    list1.forEach(item => {
        item.style.visibility = "hidden";
    })
    list2.forEach(item => {
        item.style.visibility = "hidden";
    })
    list4.forEach(item => {
        item.style.visibility = "hidden";
    })
}
function lowPosList(button) {
    const list1 = document.querySelectorAll('.highNeg-list');
    const list2 = document.querySelectorAll('.highPos-list');
    const list3 = document.querySelectorAll('.lowNeg-list');
    const list4 = document.querySelectorAll('.lowPos-list');
    list4.forEach(item => {
        item.style.visibility = "visible";
    });
    list1.forEach(item => {
        item.style.visibility = "hidden";
    })
    list2.forEach(item => {
        item.style.visibility = "hidden";
    })
    list3.forEach(item => {
        item.style.visibility = "hidden";
    })
}


// const themeToggle = document.getElementById('theme-toggle');
        
//             function changeColor() {
//                 document.documentElement.style.setProperty("--background-color", '#EECFD4');
//                 document.documentElement.style.setProperty("--prompt-container-bgcolor", '#AAC0AA');
//                 document.documentElement.style.setProperty("--header-bgcolor", '#AD9FBC');
//                 document.documentElement.style.setProperty("--outline-color", '#859785');
//                 document.documentElement.style.setProperty("--hr-color", '#837472');
//                 document.documentElement.style.setProperty("--button-textcolor", '#fff');
//                 document.documentElement.style.setProperty("--button-hovercolor", '#000');
//                 document.documentElement.style.setProperty("--prompt-color", '#938482');
//                 // document.documentElement.style.setProperty("--filter-title-bgcolor", '#EECFD4');
//             }

function applyTheme(cssFile) {
    const themeLink = document.getElementById('theme-stylesheet');
    themeLink.setAttribute('href', cssFile);
    localStorage.setItem('selectedTheme', cssFile);
}

function loadSelectedTheme() {
    const selectedTheme = localStorage.getItem('selectedTheme');
  
    if (selectedTheme) {
      const themeLink = document.getElementById('theme-stylesheet');
      themeLink.setAttribute('href', selectedTheme);
    }
  }

//store
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
      section.style.display = 'none';
  });

  // Show the selected section
  document.getElementById(sectionId).style.display = 'block';
  document.getElementById(sectionId).style.visibility = 'visible';
  document.getElementById("storeFilter").style.visibility = 'visible';
  document.getElementById("sortOptions").style.visibility = 'visible';
}

function scrollThemeContainer(direction) {
  const container = document.querySelector('.theme-container');
  const containerWidth = container.offsetWidth; // Width of the container
  const scrollAmount = containerWidth; // Adjust this value as needed

  if (direction === 'left') {
      container.scrollLeft -= scrollAmount; // Scroll left
  } else if (direction === 'right') {
      container.scrollLeft += scrollAmount; // Scroll right
  }
}

function scrollPromptContainer(direction) {
  const container = document.querySelector('.prompt-container');
  const containerWidth = container.offsetWidth; // Width of the container
  const scrollAmount = containerWidth; // Adjust this value as needed

  if (direction === 'left') {
      container.scrollLeft -= scrollAmount; // Scroll left
  } else if (direction === 'right') {
      container.scrollLeft += scrollAmount; // Scroll right
  }
}

function scrollPetContainer(direction) {
  const container = document.querySelector('.pet-container');
  const containerWidth = container.offsetWidth; // Width of the container
  const scrollAmount = containerWidth; // Adjust this value as needed

  if (direction === 'left') {
      container.scrollLeft -= scrollAmount; // Scroll left
  } else if (direction === 'right') {
      container.scrollLeft += scrollAmount; // Scroll right
  }
}