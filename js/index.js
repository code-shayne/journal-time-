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

  // Function to apply theme
  function applyTheme(theme) {
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
          '--header-bgcolor': '#8c69d3',
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
          '--form-bgcolor': '#ACAD8C',
          '--form-shadow': '#0f355c',
          '--scroll-bgcolor': '#9cad8c',
          '--scroll-color': '#859577',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': '#457c45'
        },
        'pizza': {
          '--background-color': '#9F817F',
          '--prompt-container-bgcolor': '#ECCEAC',
          '--header-bgcolor': '#C44536',
          '--outline-color': '#65473E',
          '--hr-color': '#28522F',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#3D7B46',
          '--filter-title-bgcolor': '#223168',
          '--form-bgcolor': '#4F4F31',
          '--form-shadow': '#474D37',
          '--scroll-bgcolor': '#4F4F31',
          '--scroll-color': '#938f6f',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': '#B14736'
        },
        'sunset': {
          '--background-color': '#E3AA63',
          '--prompt-container-bgcolor': '#F2CD60',
          '--header-bgcolor': '#CE713B',
          '--outline-color': '#E2AE12',
          '--hr-color': '#EA85AF',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#E1518D',
          '--filter-title-bgcolor': '#223168',
          '--form-bgcolor': '#EC979C',
          '--form-shadow': '#EFB27E',
          '--scroll-bgcolor': '#EDABB7',
          '--scroll-color': '#E38092',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': '#DC7B75'
        },
        'christmas': {
          '--background-color': '#4F7033',
          '--prompt-container-bgcolor': '#b42d1a',
          '--header-bgcolor': '#891515',
          '--outline-color': '#6B1A0F',
          '--hr-color': '#46622D',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#BEA660',
          '--filter-title-bgcolor': '#223168',
          '--form-bgcolor': '#9F2118',
          '--form-shadow': '#941B17',
          '--scroll-bgcolor': '#EF9B95',
          '--scroll-color': '#EA7971',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': '#79291B'
        },
        'pride': {
          '--background-color': '#ffffe0',
          '--prompt-container-bgcolor': '#ff6163',
          '--header-bgcolor': '#72a8ff',
          '--outline-color': '#ff3639',
          '--hr-color': '#ffd670',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#ff8356',
          '--filter-title-bgcolor': '#223168',
          '--form-bgcolor': '#9F2118',
          '--form-shadow': '#941B17',
          '--scroll-bgcolor': '#EF9B95',
          '--scroll-color': '#EA7971',
          '--textbox-color': 'rgba(250, 250, 250, 0.2)',
          '--bgcolor': '#79291B'
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
  document.getElementById('pizza-theme-toggle').addEventListener('click', function() {
    applyTheme('pizza')
  });
  document.getElementById('sunset-theme-toggle').addEventListener('click', function() {
  applyTheme('sunset')
  });
  document.getElementById('christmas-theme-toggle').addEventListener('click', function() {
    applyTheme('christmas')
    });
  document.getElementById('pride-theme-toggle').addEventListener('click', function() {
    applyTheme('pride')
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

const promptsData = {
    freeJournal: [
      "Write whatever you want!"
    ],
    serious: [
        "What's something you want to get off your chest?",     
        "How was your day?",
        "What was the best thing that happened today?",
        "What was the worst thing that happened today?",
        "What are you thankful for recently?",
        "What is something you wish you did differently?",
        "What emotion have you felt the most recently?",
        "What's one thing you can't live without?",
        "What is the best gift you have ever given?",
        "What is the best gift you have ever recieved?",
        "What decision are you facing right now?",
        "In general, how do you feel your life is going right now?",
        "How do you usually handle your emotions?",
        "What emotion you tend to supress more than others?",
        "What life experiences have shaped who you are today?",
        "What are you afraid of?",
        "What is something you are looking forward to?",
        "What goals do you have for the future?",
        "What is the most important value you have?",
        "What advice would you give to your younger self?",
        "When was the last time you went out of your comfort zone? What did you learn?",
        "What skill are you most grateful to have learned?",
        "What is something unexpected that happened today?",
        "What are three goals you wish to achieve in the next year?",
        "What is holding you back from achieving your goals? What can you do to change that?",
        "When was the last time you felt a strong sense of purpose? What were you doing?",
        "Write about a place that holds special significance for you.",
        "What do you admire most about your role model?",
        "What is your biggest dream? Do you think you will reach it?"
    ],
    fun: [
        "What is your favorite joke and why does it make you laugh?",
        "If you could have any superpower, which one would you choose?",
        "Who would you switch lives with for a day if you could?",
        "What was your favorite childhood toy?",
        "What place do you want to travel to most?",
        "What is your best memory from childhood?",
        "If your mind was an ocean right now, what would it look like?",
        "Write a letter to yourself 10 years in the future.",
        "If you could have dinner with anyone, dead or alive, who would you choose?",
        "What advice would you give your past self?",
        "Describe what a perfect day would look like for you?",
        "What animal would you want to be?",
        "Where's the first place you would go if you had a time machine?",
        "What fictional world from any book or movie would you visit if you could?",
        "Who was your favorite teacher ever?",
        "What is something unique that you do?",
        "If you life were a movie, what genre would it be?",
        "What is your personal theme song?",
        "What is your ultimate confort food?",
        "What is the most valuable piece of advice you have been given?",
        "What is your favorite way to express yourself?",
        "Write a letter to someone who has had an impact on your life.",
        "What is on your bucket list?",
        "Rewrite the ending to your favorite childhood book or movie.",
        "Create a time capsule filled with items that represent your life right now. What would you include, and when would it be opened?",
        "What did you dream last night?"
    ],
    self_reflection: [
        "What is your favorite thing about yourself?",
        "What is your biggest strength?",
        "What is your biggest weakness?",
        "What are you passionate about?",
        "What are some things that make you feel confident?",
        "What parts of yourself do you hide?",
        "How do you define your beliefs and values?",
        "What are five things you are good at?",
        "What makes you happy?",
        "What is important to you? Why is it important?",
        "What motivates you?",
        "What do you think your best quality is?",
        "How did you respond to a recent setback or failure? Looking back, would you change anything?",
        "Are you on track to reaching your goals?",
        "How do you practice self-care or self-love?",
        "How do you embrace or resist change?",
        "What is one thing you do for just yourself?"
    ],
    wyr: [
        "Would you rather have telekines or telepathy?",
        "Would you rather find true love today or win the lottery next year?",
        "Would you rather have universal respect or unlimited power?",
        "Would you rather labor under a hot sun or extreme cold?",
        "Would you rather have a personal maid or a personal chef?",
        "Would you rather always be 10 minutes late or always be 20 minutes early?",
        "Would you rather have a pause or a rewind button in your life?",
        "Would you rather die in 20 years with no regrets or live to 100 with a lot of regrets?",
        "Would you rather be able to take back anything you say or hear any conversation that is about you?",
        "Would you rather travel to the past or the future?",
        "Would you rather have unlimited money or unlimited time?",
        "Would you rather have the power of eternal youth or the wisdom of old age?",
        "Would you rather have the power to heal any illness or injury instantly or have the ability to bring joy to anyone's life?",
        "Would you rather have the ability to know every detail about your past or every detail about your future?"
    ],
    gratitude: [
        "Who are three people in your life that you are grateful for, and why?",
        "What is something you take for granted in your life?",
        "What is something in your life that you feel lucky to have?",
        "In what ways have you grown as a person in the last year?",
        "How can you show your gratitude?",
        "What simple delights have you enjoyed recently?"
    ],
    grief: [
      "What is the fondest memory you have of the person you lost?",
      "What do you miss most about the person you lost?",
      "How has this loss impacted your daily routine?",
      "How can you deal with your grief?",
      "How can you find support and comfort?",
      "Who is someone you can open up to about your grief?",
      "What are some healthy ways to work through your grief?",
      "What has brought you the most comfort recently?",
      "What positive things do you have in your life right now?",
      "What can you do to care for yourself right now?"
    ],
    story: [
      "Create a story where the main character finds an old key in the attic. Where does it lead?",
      "Create a story that describes a chance encounter that changes the main character's life.",
      "Create a story about the consequences of a character time traveling.",
      "Create a story where the main character receives a letter from their future self.",
      "Create a story where the main character recalls a forgotten childhood memory.",
      "Create a story where the main character has to survive being stranded with strangers.",
      "Create a story where the main character has to savigate a world where everything is opposite.",
      "Create a story where the main character inherits an artifact with mystical powers.",
      "Create a story where society regulates emotions with technology.",
      "Create a story where dreams become the reality.",
      "Create a story where the main character has to choose between two paths that lead to different futures.",
      "Create a story about someone who receives a mysterious message outlining an adventure.",
      "Create a story where the main character witnesses a miraculous event that defies all known laws of physics.",
      "Create a story where the main character discovers a mirror that shows them alternate universes.",
      "Create a story where the main character is trapped in a never-ending cycle of deja vu."
    ],
    goals: [
      "Envision your ideal life five years from now. Describe it in detail, including your career, relationships, health, and hobbies.",
      "Reflect on your current priorities in life. What areas do you want to focus on improving, and why? Set three priority goals for the next six months.",
      "Think about a skill or area of knowledge you want to improve. How can you dedicate time to learning and growing in this area?",
      "What new experiences or places do you want to explore? Set a goal that encourages you to step out of your comfort zone and embrace new opportunities.",
      "Reflect on ways you can contribute to your community or give back to others. How can you volunteer your time, skills, or resources to make a positive difference?",
      "What habits do you want to cultivate or break? How do you aim to change these habits?",
      "What boundaries do you set for yourself and others? How do you maintain these boundaries?",
      "How do you define success? Under this definition, have you succeeded? How can you succeed more in the future?",
      "What steps can you take to advance your career or pursue new opportunities?"
    ]
  };

  function getRandomPrompt(sheetName) {
    const prompts = promptsData[sheetName];
    if (!prompts || prompts.length === 0) {
      console.error(`No prompts found for sheet "${sheetName}".`);
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[randomIndex];
  
    const promptElement = document.querySelector('#h1Title');    
    promptElement.textContent = randomPrompt;
  }

const freeJournal = document.getElementById('freeJournal');
freeJournal.addEventListener('click', () => {
  getRandomPrompt('freeJournal');
})

const seriousPrompt = document.getElementById('seriousPrompt');
seriousPrompt.addEventListener('click', () => {
  getRandomPrompt('serious');
});

const funPrompt = document.getElementById('funPrompt');
funPrompt.addEventListener('click', () => {
  getRandomPrompt('fun');
});

const selfPrompt = document.getElementById('selfPrompt');
selfPrompt.addEventListener('click', () => {
  getRandomPrompt('self_reflection');
});

const wyrPrompt = document.getElementById('wyrPrompt');
wyrPrompt.addEventListener('click', () => {
  getRandomPrompt('wyr');
});

const gratitudePrompt = document.getElementById('gratitudePrompt');
gratitudePrompt.addEventListener('click', () => {
  getRandomPrompt('gratitude');
});

const griefPrompt = document.getElementById('griefPrompt');
griefPrompt.addEventListener('click', () => {
  getRandomPrompt('grief');
})

const storyPrompt = document.getElementById('storyPrompt');
storyPrompt.addEventListener('click', () => {
  getRandomPrompt('story');
});

const goalsPrompt = document.getElementById('goalsPrompt');
goalsPrompt.addEventListener('click', () => {
  getRandomPrompt('goals');
});

//submit popup
const submit = document.getElementById('submit-entry');

submit.addEventListener('click', () => {
  document.getElementById('crystal-popup').style.visibility = 'visible'; 
  setTimeout(function() {
    document.getElementById('crystal-popup').style.visibility = 'hidden';
   }, 500);
});

//hamburger!
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show-menu');
});
