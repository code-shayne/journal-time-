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
  forgotBtn.classList.remove("active");

  loginForm.style.display = "block";
  forgotForm.style.display = "none";
  signupForm.style.display = "none";
  forgotForm.style.display = "none";
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
  forgotBtn.classList.remove("active");
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
    loginBtn.classList.remove("active");
    signupBtn.classList.remove("active");
    forgotForm.style.display = "block";
    loginForm.style.display = "none";
    signupForm.style.display = "none";

  }

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

// function applyTheme(cssFile) {
//     const themeLink = document.getElementById('theme-stylesheet');
//     themeLink.setAttribute('href', cssFile);
//     localStorage.setItem('selectedTheme', cssFile);
// }

// function loadSelectedTheme() {
//     const selectedTheme = localStorage.getItem('selectedTheme');
  
//     if (selectedTheme) {
//       const themeLink = document.getElementById('theme-stylesheet');
//       themeLink.setAttribute('href', selectedTheme);
//     }
//   }

  // Function to apply theme
  function applyTheme(theme) {
    // Define theme-specific CSS variables
    const themes = {
        'default': {
          '--background-color': '#a3b9e3',
          '--prompt-container-bgcolor': '#a19ce1',
          '--header-bgcolor': '#B8336A',
          '--outline-color': '#8882e4',
          '--hr-color': '#175490',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#476CB0',
          '--filter-title-bgcolor': '#8b86d0',
          '--form-bgcolor': '#6d8cc5',
          '--form-shadow': '#0f355c',
          '--scroll-bgcolor': '#d891f',
          '--scroll-color': '#cf6d96',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': 'rgb(26,82,94)'
        },
        'slime': {
          '--background-color': '#a9e3a3',
          '--prompt-container-bgcolor': '#adfbc4',
          '--header-bgcolor': '#854eb4',
          '--outline-color': '#559a60',
          '--hr-color': '#17908a',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#33b876',
          '--filter-title-bgcolor': '#8b86d0',
          '--form-bgcolor': '#57c8a2',
          '--form-shadow': '#0f5c49',
          '--scroll-bgcolor': '#b0d891',
          '--scroll-color': '#70cf6d',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': 'rgb(26,94,79)'
        },   
        'rose': {
          '--background-color': '#ceb1be',
          '--prompt-container-bgcolor': '#b97375',
          '--header-bgcolor': '#799185',
          '--outline-color': '#7c4048',
          '--hr-color': '#C4929A',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#9F7277',
          '--filter-title-bgcolor': '#b9739c',
          '--form-bgcolor': '#b290c7',
          '--form-shadow': '#0f355c',
          '--scroll-bgcolor': '#d891f',
          '--scroll-color': '#cf6d96',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': 'rgb(94,26,75)'
        },
        'beach': {
          '--background-color': '#b5e2fa',
          '--prompt-container-bgcolor': '#0fa3b1',
          '--header-bgcolor': '#e4b363',
          '--outline-color': '#5fbcc5',
          '--hr-color': '#925f00',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#ad6a6c',
          '--filter-title-bgcolor': '#86a7d0',
          '--form-bgcolor': '#6d8cc5',
          '--form-shadow': '#0f355c',
          '--scroll-bgcolor': '#d8c491',
          '--scroll-color': '#cfa86d',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': 'rgb(26,82,94)'
        },
        'wild-west': {
          '--background-color': '#9db4b6',
          '--prompt-container-bgcolor': '#007e8c',
          '--header-bgcolor': '#914236',
          '--outline-color': '#0f666f',
          '--hr-color': '#654a0a',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#b86230',
          '--filter-title-bgcolor': '#223168',
          '--form-bgcolor': '#b86230',
          '--form-shadow': '#0f355c',
          '--scroll-bgcolor': '#a86258',
          '--scroll-color': '#914236',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': '#007e8c'
        },
        'forest': {
          '--background-color': '#c6e1bb',
          '--prompt-container-bgcolor': '#869d7a',
          '--header-bgcolor': '#91785d',
          '--outline-color': '#5b764c',
          '--hr-color': '#28522d',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#785a3a',
          '--filter-title-bgcolor': '#223168',
          '--form-bgcolor': '#b86230',
          '--form-shadow': '#0f355c',
          '--scroll-bgcolor': '#a86258',
          '--scroll-color': '#914236',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': '#007e8c'
        }
    };

    // Apply theme-specific CSS variables
    const root = document.documentElement;
    const themeVariables = themes[theme];
    Object.keys(themeVariables).forEach(property => {
        root.style.setProperty(property, themeVariables[property]);
    });

    // Store selected theme in localStorage for persistence
    localStorage.setItem('selectedTheme', theme);
}

document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners to theme toggle buttons
  document.getElementById("default-theme-toggle").addEventListener('click', function() {
      applyTheme('default');
  });
  document.getElementById('slime-theme-toggle').addEventListener('click', function() {
      applyTheme('slime');
  });
  document.getElementById("rose-theme-toggle").addEventListener('click', function() {
      applyTheme('rose');
  });
  document.getElementById('beach-theme-toggle').addEventListener('click', function() {
      applyTheme('beach');
  });
  document.getElementById('wild-west-theme-toggle').addEventListener('click', function() {
      applyTheme('wild-west');
  });
  document.getElementById('forest-theme-toggle').addEventListener('click', function() {
      applyTheme('forest')
  });



  // Apply theme stored in localStorage (if available)
  const selectedTheme = localStorage.getItem('selectedTheme');
  if (selectedTheme) {
      applyTheme(selectedTheme);
  }
});

function loadSelectedTheme() {
  const selectedTheme = localStorage.getItem('selectedTheme');
  if (selectedTheme) {
      applyTheme(selectedTheme);
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