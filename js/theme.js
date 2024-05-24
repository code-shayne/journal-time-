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
        '--background-color': '#FB8C00',
        '--prompt-container-bgcolor': '#43A047',
        '--header-bgcolor': '#E53935',
        '--outline-color': '#FDD835',
        '--hr-color': '#8E24AA',
        '--button-textcolor': '#fff',
        '--button-hovercolor': '#000',
        '--prompt-color': '#1E88E5',
        '--filter-title-bgcolor': '#223168',
        '--form-bgcolor': '#1E88E5',
        '--form-shadow': '#FDD835',
        '--scroll-bgcolor': '#EF9B95',
        '--scroll-color': '#EA7971',
        '--textbox-color': 'rgba(250, 250, 250, 0.2)',
        '--bgcolor': '#43A047'
      },
      'mermaid': {
        '--background-color': '#a4d2de',
        '--prompt-container-bgcolor': '#76deac',
        '--header-bgcolor': '#ac8bad',
        '--outline-color': '#4abda6',
        '--hr-color': '#c484b7',
        '--button-textcolor': '#fff',
        '--button-hovercolor': '#000',
        '--prompt-color': '#d197b0',
        '--filter-title-bgcolor': '#223168',
        '--form-bgcolor': '#4abda6',
        '--form-shadow': '#d197b0',
        '--scroll-bgcolor': '#EF9B95',
        '--scroll-color': '#EA7971',
        '--textbox-color': 'rgba(250, 250, 250, 0.2)',
        '--bgcolor': '#015482'
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
document.getElementById('mermaid-theme-toggle').addEventListener('click', function() {
    applyTheme('mermaid')
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