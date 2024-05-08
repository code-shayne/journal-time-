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