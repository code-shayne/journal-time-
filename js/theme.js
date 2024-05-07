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
        },
        'slime': {
            '--background-color': '#a9e3a3',
            '--prompt-container-bgcolor': '#9cc2e1',
            '--header-bgcolor': '#33b876',
            '--outline-color': '#2d22cd',
            '--hr-color': '#907e17',
            '--button-textcolor': '#fff',
            '--button-hovercolor': '#000',
            '--prompt-color': '#8847b0',
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
        },
        'beach': {
          '--background-color': '#b5e2fa',
          '--prompt-container-bgcolor': '#0fa3b1',
          '--header-bgcolor': '#e4b363',
          '--outline-color': '#5fbcc5',
          '--hr-color': '#f3ebcc',
          '--button-textcolor': '#fff',
          '--button-hovercolor': '#000',
          '--prompt-color': '#ad6a6c',
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



  // Apply theme stored in localStorage (if available)
  const selectedTheme = localStorage.getItem('selectedTheme');
  if (selectedTheme) {
      applyTheme(selectedTheme);
  }
});