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
  var box_text2 = document.getElementsByClassName("product-dscrp2");
  var name_list = ["Whole Dried Cranberries", "Standard Cut Dried Cranberries", "Chuncks of Dried Cranberries", "Wild Dried Blueberries", "Cultivated Dried Blueberries"];
  var name = document.getElementsByClassName('product_name');
  for (i = 0; i < name.length; i++) {
    if (name_list.includes(name[i].innerHTML)) {
      box_p1[i].style.display = 'block';
      if (name[i].innerHTML.includes('Whole Dried Cranberries') || name[i].innerHTML.includes('Standard Cut Dried Cranberries') || name[i].innerHTML.includes('Chuncks of Dried Cranberries')) {
        box_text[i].style.top = '37%';
      }else if (name[i].innerHTML.includes('Wild Dried Blueberries') || name[i].innerHTML.includes('Cultivated Dried Blueberries')) {
        box_text2[i].style.top = '72%';
        console.log('asdasddasd')
      }
    }else{
      box_p1[i].style.display = 'none';
    }
  }
});

// var box_text = document.getElementsByClassName("product-dscrp");
// for (var i = 0; i < box_text.length; i++) {
//   if (box_text[i].style.opacity = '1') {
//     box_text[i].style.top = '37%';
//     box_text[i].style.marginLeft = '1.1%';
//   }
// }

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
  var text1 = document.getElementsByClassName('product-dscrp3');
  var name_list = ["Cranberry Juice Concentrates", "Apple Juice Concentrates", "Maple Syrup"];
  var name = document.getElementsByClassName('product_name');
  for (i = 0; i < name.length; i++) {
    if (name_list.includes(name[i].innerHTML)) {
      box_p1[i].style.display = 'block';
      console.log('test1')
      text1[i].style.top = '54.5%';
      console.log('test2')
      text1[i].style.marginLeft = '1%';
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


const data = {
  "Whole Dried Cranberries":"Whole & juicy dried cranberries. Made with real whole fruit, they have no artificial flavors or preservatives, non-GMO, gluten-free. Gently dried for a fresher taste. Great for snacks, salads, and baking.",

  "Standard Cut Dried Cranberries":"Standard cut dried cranberries are made with real fruit and cut in half. They have no artificial flavors or preservatives, non-GMO, or gluten-free. Gently dried for a fresher taste. Great for baking and further processing.",

  "Chuncks of Dried Cranberries":"Chunks of dried cranberries are made with real fruit and cut into smaller pieces, bits. They have no artificial flavors or preservatives, non-GMO, or gluten-free. Gently dried for a fresher taste. Great for baking and further processing.",

  "Wild Dried Blueberries":"Whole & juicy dried blueberries harvested in forests. Made with real whole fruit, they have no artificial flavors or preservatives non-GMO, gluten-free. Gently dried for a fresher taste. Great for snacks, salads, and baking.",

  "Cultivated Dried Blueberries":"Whole & juicy dried blueberries harvested in a plant. Made with real whole fruit, they have no artificial flavors or preservatives no-GMO, gluten-free. Gently dried for a fresher taste. Great for snacks, salads, and baking.",

  "Aseptic Unsweetened Cranberry Puree":"Our cranberry puree is made from whole cranberries, prepared using cutting-edge equipment to preserve all the goodness of the fruit. Prepared with non-GMO ingredients. No added sweeteners, preservatives, flavors, or colors. The puree is pasteurized and aseptically packaged to guarantee the product’s shelf life and minimize transport and warehousing costs.",

  "Cranberry Juice Concentrates":"Our cranberry juice concentrate is made from whole cranberries, processed using cutting-edge equipment to preserve all the goodness of the fruit. Prepared with non-GMO berries. No added sweeteners, preservatives, flavors, or colors. Available on demand in aseptic packaging to minimize transport and warehousing costs.",

  "Apple Juice Concentrates":"Our apple juice concentrate is made from whole apples, processed using cutting-edge equipment to preserve all the goodness of the fruit. Prepared with non-GMO apples. No added sweeteners, preservatives, flavors, or colors. Available on demand in aseptic packaging to minimize transport and warehousing costs.",

  "Maple Syrup":"Our maple syrup is made from maple tree sap that's been boiled down to reduce the water content and concentrate the sugars. Those sugars caramelize, resulting in maple syrup's characteristic rich color and flavor. Take advantage of our large assortment of maple syrups to satisfy your most demanding customers."
}


const show_text = (id) => {
  var title = document.getElementById(id).children[0].innerHTML;
  var text = data[title];
  let popup = document.createElement('div'); popup.classList.add('popup-window');
  popup.id = id + "-popup";
    let close = document.createElement('h1'); close.innerText = 'x'; close.classList.add('close-box'); 
    close.id = id + '-close';
    popup.appendChild(close);
    let p_title = document.createElement('h2'); p_title.innerText = title;
    popup.appendChild(p_title);
    let p_text = document.createElement('p'); p_text.innerText = text;
    popup.appendChild(p_text);
    close.addEventListener('click', function() {
      popup.classList.toggle('hide');
    })
  document.body.appendChild(popup);
}


const close_box = (b_id) => {
  document.addEventListener('mouseup', function(e){
    var container = document.getElementById(b_id);
    if(!container.contains(e.target)){
      container.style.display = 'none';
    }
  });
}

// const close_button = (c_id, b_id) => {
//   var box = document.getElementById(b_id);
//   document.getElementById(c_id).addEventListener('click', function(){
//     console.log('test')
//     if (box.style.display == 'block'){
//       box.style.display == 'none'
//     }else{
//       box.style.display == 'block'
//     }
//   })
// }

var the_boxes = document.querySelectorAll('.product-box');
for (var i = 0; i < the_boxes.length; i++) {
  var b_id = the_boxes[i].id + "-popup"
  var c_id = the_boxes[i].id + "-close"
  console.log(c_id)
  close_box(b_id);
  // close_button(c_id, b_id);
}
