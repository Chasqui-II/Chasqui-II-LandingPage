(function() {
    "use strict";
  
    const select = (el) => {
      return document.querySelector(el.trim());
    }
  
    const selectHeader = select('#header');
    const selectLogo = select('.logo');
    const selectNavbar = select('#navbar');
  
    if (selectHeader && selectLogo && selectNavbar) {
      const handleScroll = () => {
        if (window.scrollY > 100) {
            selectLogo.classList.add('logo-centered')
            selectNavbar.style.display = 'none'
            
        } else {
            selectNavbar.style.display = 'flex'
            selectNavbar.classList.add('navbar-appears')
            selectLogo.classList.remove('logo-centered')
        
        }
      }
  
      window.addEventListener('load', handleScroll);
      window.addEventListener('scroll', handleScroll);
    }
  })();
  