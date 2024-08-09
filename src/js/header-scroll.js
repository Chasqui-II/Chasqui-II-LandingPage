(function() {
    "use strict";
  
    const select = (el) => {
      return document.querySelector(el.trim());
    }
  
    let selectHeader = select('#header');
    let selectLogo = select('.logo');
    let selectNavbar = select('#navbar');
  
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
  