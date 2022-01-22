/**
* Template Name: Gp - v4.7.0
* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {

  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()

document.getElementById('currency').addEventListener('click' , function() {
  document.getElementById("stocks_container").style.display = "block";
  document.getElementById("b_text").innerHTML = "Close";
}); 

document.getElementById('currency').addEventListener('mouseup' , function() {
  document.getElementById("stocks_container").style.display = "none";
  document.getElementById("b_text").innerHTML = "Check the currency";
});

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('stocks_container');
  if (!container.contains(e.target)) {
      container.style.display = 'none';
      document.getElementById("b_text").innerHTML = "Check the currency";
  }
});

function hoverFunc(x) {
  x.style.opacity = '1';
}
function hoverOff(x) {
  x.style.opacity = '0';
}


// Search bar function
function searchProducts(input) {
  var name = document.getElementsByClassName("product_name");
  var box_p1 = document.getElementsByClassName("product-box");
  var box_text = document.getElementsByClassName("product-dscrp");
  for (i = 0; i < name.length; i++) {
    if(!name[i].innerHTML.toLowerCase().includes(input)) {
      box_p1[i].style.display = "none";
    }else{
      box_p1[i].style.display = "block";
    }
  }
};


var box_text = document.getElementsByClassName("product-dscrp");
function adjustShadow1() {
  box_text.style.width = "32.4%";
  box_text.style.top = "56%";
  box_text.style.paddingTop = "3%";
  box_text.style.paddingBottom = "3%";
}

// Filter Function
document.getElementById('berries').addEventListener("click", function() {
  var box_p1 = document.getElementsByClassName("product-box");
  var box_text = document.getElementsByClassName("product-dscrp");
  var name_list = ["Whole Dried Cranberries", "Standard Cut Dried Cranberries", "Chucks of Dried Cranberries", "Wild Whole Dried Blueberries", "Cultivated Whole Dried Blueberries"];
  var name = document.getElementsByClassName('product_name');
  for (i = 0; i < name.length; i++) {
    if (name_list.includes(name[i].innerHTML)) {
      box_p1[i].style.display = 'block';
    }else{
      box_p1[i].style.display = 'none';
    }
  }
});

document.getElementById('purre').addEventListener("click", function() {
  var box_p1 = document.getElementsByClassName("product-box");
  var name_list = ["Aseptic Unsweetened Cranberry Puree"];
  var name = document.getElementsByClassName('product_name');
  for (i = 0; i < name.length; i++) {
    if (name_list.includes(name[i].innerHTML)) {
      box_p1[i].style.display = 'block';
    }else{
      box_p1[i].style.display = 'none';
    }
  }
});
document.getElementById('juices').addEventListener("click", function() {
  var box_p1 = document.getElementsByClassName("product-box");
  var text = document.getElementsByClassName('product-dscrp3');
  var name_list = ["Cranberry Juice Concentrate", "Apple Juice Concentrate", "Maple Syrup"];
  var name = document.getElementsByClassName('product_name');
  for (i = 0; i < name.length; i++) {
    if (name_list.includes(name[i].innerHTML)) {
      box_p1[i].style.display = 'block';
    }else{
      box_p1[i].style.display = 'none';
    }
  }
});

document.getElementById('all').addEventListener("click", function() {
  var all = document.getElementsByClassName("product-box");
  for (i = 0; i < all.length; i++) {
    all[i].style.display = 'block';
  }

});