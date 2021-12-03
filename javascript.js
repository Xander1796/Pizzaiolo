'use strict';

import { allTheMenuItems } from './menuItems.js';

const root = document.documentElement;
const body = document.querySelector('body');
const shoppingCart = document.querySelector('.shopping-cart');
const shoppingCartHover = document.querySelector('.shopping-cart-hover');
const shoppingCartQuantity = document.querySelector('.shopping-cart-quantity');
const header = document.querySelector('header');
const menuSection = document.querySelector('.menu-section');
const allLinks = document.querySelectorAll('.nav-link');
const shoppingCartPopupOverlay = document.querySelector('.shopping-cart-popup-overlay');
const shoppingCartPopup = document.querySelector('.shopping-cart-popup');
const shoppingCartPopupItems = document.querySelector('.shopping-cart-popup-items');
const goBack = document.querySelector('.go-back');
const goBackArrow = document.querySelector('.go-back-arrow');
const deliveryProductsTotalCost = document.querySelector('.delivery-information-products-total-cost');
const itemsToCartConfirmationContainer = document.querySelector('.items-to-cart-confirmation-container');
const menuIcon = document.querySelector('.fa-bars');
const menuContainer = document.querySelector('.nav-links-container');
const nav = document.querySelector('nav');
const colorSwitcherContainer = document.querySelector('.color-switcher-container');
const colorSwitcher = document.querySelector('.color-switcher');
const whiteMode = document.querySelector('.white-mode');
const darkMode = document.querySelector('.dark-mode');
const linkContainer = document.querySelectorAll('.link-container');
const slideImage = document.querySelector('.slide-image');
const slideButtonsContainer = document.querySelector('.header-slide-buttons-container');
const slideButton = document.querySelectorAll('.slide-button');
const playPauseButton = document.querySelector('.slide-button-play-pause');
let countSlideImage = 0;
const menuItemsContainer = document.querySelector('.menu-items-container');
const menuButtonsContainer = document.querySelector('.menu-buttons-container')
const menuButton = document.querySelectorAll('.menu-button');
const aboutSection = document.querySelector('.about-section');
const aboutSectionCard = document.querySelectorAll('.about-section-card');
const aboutDot = document.querySelectorAll('.about-dot');
const aboutSlideContainer = document.querySelector('.about-section-cards-slider');
const goUpArrow = document.querySelector('.go-up-arrow');


// COLOR SWITCHER

colorSwitcherContainer.addEventListener('click' , function() {
  colorSwitcher.classList.toggle('color-switcher-active');
  whiteMode.classList.toggle('color-mode-active');
  darkMode.classList.toggle('color-mode-active');
  
  if(darkMode.classList.contains('color-mode-active')) {
    root.style.setProperty('--background-white-mode', '#262a2d');
    root.style.setProperty('--text-color-white-mode-87', 'rgb(255, 255, 255, .87)');
    root.style.setProperty('--text-color-white-mode-60', 'rgb(255, 255, 255, .60)');
    root.style.setProperty('--text-color-white-mode-35', 'rgb(255, 255, 255, .35)');
    root.style.setProperty('--box-shadow', '3px 3px 10px rgb(0, 0, 0, 0.35), -3px -3px 10px rgba(48, 48, 48, 0.35)');
    root.style.setProperty('--inset-box-shadow', 'inset 3px 3px 10px rgb(0, 0, 0, 0.35),inset -3px -3px 10px rgba(48, 48, 48, 0.35)'); 
 
  } else {
    root.style.setProperty('--background-white-mode', '#ffffff');
    root.style.setProperty('--text-color-white-mode-87', 'rgb(0, 0, 0, .87)');
    root.style.setProperty('--text-color-white-mode-60', 'rgb(0, 0, 0, .60)');
    root.style.setProperty('--text-color-white-mode-35', 'rgb(0, 0, 0, .35)');
    root.style.setProperty('--box-shadow', '3px 3px 10px rgb(0, 0, 0, 0.2), -3px -3px 10px rgba(255, 255, 255, 0.2)');
    root.style.setProperty('--inset-box-shadow', '3px 3px 10px rgb(0, 0, 0, 0.2), -3px -3px 10px rgba(255, 255, 255, 0.2)');
  }

})

// BURGER MENU
menuIcon.addEventListener('click', function() {
   menuContainer.classList.toggle('show-menu');
   menuContainer.classList.toggle('nav-links-container-animation');
   nav.classList.toggle('nav-border-change');
   linkContainer.forEach((link, i) => {
     link.style.animation = `link-container-animation .3s ease ${i * .15}s forwards`
   })
});

// INTERSECTION OBSERVER FOR SECTIONS

const moveDot = function(entries){
  const [entry] = entries;
  if(entry.isIntersecting) {
    allLinks.forEach((link) => {
      link.classList.remove('section-into-view');
      if(link.dataset.linkNumber === entry.target.dataset.sectionNumber) link.classList.add('section-into-view');
    })
  }
}

const observeArrow = function(entries) {
  const [entry] = entries;
  if(entry.isIntersecting) {
    goUpArrow.classList.add('go-up-arrow-active');
  }
}

const removeArrow = function(entries) {
  const [entry] = entries;
  if(entry.isIntersecting) {
    goUpArrow.classList.remove('go-up-arrow-active');
  }
}

const aboutObserveElements = function(entries) {
  const entry = [...entries];
  entry.forEach((entry) => {
    if(entry.isIntersecting) entry.target.classList.add('about-section-element-visible');
  })
}

const headerOptions = {
 root: null,
 threshold: 1
}

const menuOptions = {
 root: null,
 threshold: [.15, .12 , .2]
}

const aboutOptions =  {
  root: null,
  threshold: [.3, .4]
}

const arrowOptions =  {
  root: null,
  threshold: [.1, .15, .25]
}

const removeArrowOptions = {
  root: null,
  threshold: [.4, .6, .7, 1]
}

const aboutSectionElementsOptions = {
  root: null,
  threshold: .5,
}


const aboutObservedElement = document.querySelectorAll('.about-observed-element');

const aboutSectionElementsObserver = new IntersectionObserver(aboutObserveElements, aboutSectionElementsOptions);
const headerObserver = new IntersectionObserver(moveDot, headerOptions);
const menuObserver = new IntersectionObserver(moveDot, menuOptions);
const aboutObserver = new IntersectionObserver(moveDot, aboutOptions);
const arrowObserver = new IntersectionObserver(observeArrow, arrowOptions);
const removeArrowObserver = new IntersectionObserver(removeArrow, removeArrowOptions);
arrowObserver.observe(menuSection);
removeArrowObserver.observe(header);
aboutObservedElement.forEach(el => aboutSectionElementsObserver.observe(el));



//REMOVE TRANSITION BURGER MENU WHEN RESIZING
let removeMenuTransition = function() {
  if(window.innerWidth > 800) {
    menuContainer.classList.remove('show-menu', 'nav-links-container-animation');
    nav.classList.remove('nav-border-change');
    linkContainer.forEach(link => link.style.animation = 'none');
  }
}

window.addEventListener('resize', removeMenuTransition);

//CHANGE SLIDE BUTTON TRANSITION WHEN RESIZING TO MOBILE 
const resizeSlideButton = function() {
  if(window.innerWidth <= 800 ) {
    headerObserver.unobserve(header);
    menuObserver.unobserve(menuSection);
    aboutObserver.unobserve(aboutSection);
    allLinks.forEach((link) => {
      link.classList.remove('section-into-view');
    })
  };
  if(window.innerWidth > 800) {
    headerObserver.observe(header);
    menuObserver.observe(menuSection);
    aboutObserver.observe(aboutSection);
  };
}

window.addEventListener('resize', resizeSlideButton);

const slideButtons = [];
slideButton.forEach(button => slideButtons.push(button));

const spinnerContainer = function() {
  let spinnerContainer = [...menuItemsContainer.children];
  spinnerContainer.forEach((child) => {child.firstElementChild.firstElementChild.lastElementChild.addEventListener('load', function() {
    this.previousElementSibling.classList.remove('menu-item-spinner');
  })})
}

window.addEventListener('load', function() {
  nav.style.animation = 'navanim .9s ease-out forwards';
  header.style.animation = 'headeranimate 1.3s ease forwards';
  body.style.overflowY = 'auto';
  body.style.overflowX = 'hidden';
  allTheMenuItems[0].forEach((item, i) => {
    menuItemsContainer.insertAdjacentHTML('afterbegin', firstMenuItemMarkup(item, i));
  })
  spinnerContainer();
  if(window.innerWidth <= 800) {
    headerObserver.unobserve(header);
    menuObserver.unobserve(menuSection);
    aboutObserver.unobserve(aboutSection);
  };
  if(window.innerWidth > 800) {
    headerObserver.observe(header);
    menuObserver.observe(menuSection);
    aboutObserver.observe(aboutSection);
}});

const headerSlider = function() {
  countSlideImage++;
  if(countSlideImage === slideButtons.length - 1) countSlideImage = 0;
  slideImage.classList.remove('slide-image-animation-reverse');
  slideImage.classList.add('slide-image-animation');
  slideButtons.forEach(button => button.classList.remove('slide-button-active'));
  slideButtons[countSlideImage].classList.add('slide-button-active');
  setTimeout(function() {
    slideImage.setAttribute('src', `img/${slideImage.dataset.name}${countSlideImage}.png`);
    slideImage.addEventListener('load', function() {
      slideImage.classList.remove('slide-image-animation');
      slideImage.classList.add('slide-image-animation-reverse'); 
    })
  }, 1000);
}

let headerSliderInterval =  setInterval(headerSlider, 7000);

//PAUSING THE SLIDER 

playPauseButton.addEventListener('click', function() {
  playPauseButton.classList.toggle('pause');
  if(playPauseButton.classList.contains('pause')) {
    clearInterval(headerSliderInterval);
    playPauseButton.innerHTML = '';
    playPauseButton.insertAdjacentHTML('afterbegin', '<i class="fas fa-play"></i>')
  }
  if(!playPauseButton.classList.contains('pause')) {
    headerSliderInterval = setInterval(headerSlider, 7000);
    playPauseButton.innerHTML = '';
    playPauseButton.insertAdjacentHTML('afterbegin', '<i class="fas fa-pause"></i>')
  }
})

//LISTENING FOR CLICK EVENTS ON THE SLIDE BUTTONS
slideButtonsContainer.addEventListener('click', function(e) {
  if(!e.target.dataset.number) return;
  slideButtons.forEach(button => button.classList.remove('slide-button-active'));
  e.target.classList.add('slide-button-active');
  countSlideImage = +e.target.dataset.number;
  if(playPauseButton.classList.contains('pause')) {
    playPauseButton.innerHTML = '';
    playPauseButton.classList.remove('pause');
    playPauseButton.insertAdjacentHTML('afterbegin', '<i class="fas fa-pause"></i>');
  }
  slideImage.classList.remove('slide-image-animation-reverse');
  slideImage.classList.add('slide-image-animation');
  clearInterval(headerSliderInterval);
  headerSliderInterval = setInterval(headerSlider, 7000);
  setTimeout(function() {
    slideImage.setAttribute('src', `img/slide${e.target.dataset.number}.png`);
    slideImage.classList.remove('slide-image-animation');
    slideImage.classList.add('slide-image-animation-reverse');
  }, 1000);
})


//MENU BUTTONS CONTAINER EVENT LISTENER AND INTRODUCING MENU ITEMS IN THE menuItemsContainer

const firstMenuItemMarkup = function(item, i) {
  return `
  <div class="menu-item-container menu-item-container-animation">
  <div class="all-menu-items">
      <div class="menu-item-image-container">
          <div class="menu-item-spinner"></div>
          <img src="${item.img}" alt="" class="menu-item-image">
      </div>
      <h3 class="menu-item-name">${item.name}</h3>
      <p class="menu-item-ingredients">${item.ingredients}</p>
      <div class="menu-price-and-shopping-cart">
          <span class="menu-price">${item.price} $</span>
          <div class="menu-shoppingCart">
            <i class="fas fa-minus-circle menu-remove-items" data-all-the-menu-items="${menuButtonsContainer.firstElementChild.dataset.number}" data-menu-item="${i}"></i>
            <span class="menu-item-quantity">${item.textCounter}</span>
            <i class="fas fa-plus-circle menu-add-items" data-all-the-menu-items="${menuButtonsContainer.firstElementChild.dataset.number}" data-menu-item="${i}"></i>
            <i class="fas fa-shopping-basket menu-add-to-cart" data-all-the-menu-items="${menuButtonsContainer.firstElementChild.dataset.number}" data-menu-item="${i}"></i>
          </div>
      </div>
  </div>
</div>    
  `
}

const menuItemMarkup = function(item, i, e) {
  return `
  <div class="menu-item-container menu-item-container-animation" data-number="${i}">
  <div class="all-menu-items">
      <div class="menu-item-image-container">
          <div class="menu-item-spinner"></div>
          <img src="${item.img}" alt="" class="menu-item-image">
      </div>
      <h3 class="menu-item-name">${item.name}</h3>
      <p class="menu-item-ingredients">${item.ingredients}</p>
      <div class="menu-price-and-shopping-cart">
          <span class="menu-price">${item.price} $</span>
          <div class="menu-shoppingCart">
            <i class="fas fa-minus-circle menu-remove-items" data-all-the-menu-items="${e.target.dataset.number}" data-menu-item="${i}"></i>
            <span class="menu-item-quantity">${item.textCounter}</span>
            <i class="fas fa-plus-circle menu-add-items" data-all-the-menu-items="${e.target.dataset.number}" data-menu-item="${i}"></i>
            <i class="fas fa-shopping-basket menu-add-to-cart" data-all-the-menu-items="${e.target.dataset.number}" data-menu-item="${i}"></i>
          </div>
      </div>
  </div>
</div>    
  `
}

menuButtonsContainer.addEventListener('click', function(e) {
  if(!e.target.dataset.number) return;
  if(e.target.classList.contains('menu-button-active')) return;
  menuButton.forEach(button => button.classList.remove('menu-button-active'));
  e.target.closest('.menu-button').classList.add('menu-button-active');
  menuItemsContainer.innerHTML = '';

  allTheMenuItems[+e.target.dataset.number].forEach((item, i) => {
    menuItemsContainer.insertAdjacentHTML('afterbegin', menuItemMarkup(item, i, e));
  })
  spinnerContainer();
})

//SELECT THE ITEM QUANTITY AND ADD A COUNTER 

const menuItemHoverMarkup = function(item) {
  return `
  <div class="shopping-cart-hover-item">
  <div class="shopping-cart-hover-item-image-container">
     <img src="${item.img}" class="shopping-cart-hover-item-image" alt="">
  </div>
  <div class="shopping-cart-hover-item-rs">
      <h3 class="shopping-cart-hover-item-name">${item.name}</h3>
      <div class="shopping-cart-hover-item-d">
          <span class="shopping-cart-hover-item-quantity" data-push="pl">${item.quantity}</span>
          <i class="fas fa-times shopping-cart-hover-item-x"></i>    
          <span class="shopping-cart-hover-item-price">${item.price} $</span>    
      </div>
  </div>
</div>
  `
}

const shoppingCartPopupMarkup = function(item, i) {
   return `
  <div class="shopping-cart-popup-item">
     <div class="popup-item-img-container">
         <img src="${item.img}" alt="" class="popup-item-img">
     </div>
     <div class="shopping-cart-popup-item-rs">
        <div class="cart-popup-item-rs-name">${item.name}</div>
        <div class="cart-popup-item-rs-bottom">
            <i class="fas fa-minus-circle cart-popup-item-minus" data-item-index="${i}"></i>
            <span class="cart-popup-item-quantity">${item.quantity}</span>
            <i class="fas fa-plus-circle cart-popup-item-plus" data-item-index="${i}"></i>
            <i class="fas fa-trash cart-popup-item-trash" data-item-index="${i}"></i>
            <span class="cart-popup-item-price">${item.price} $</span>
        </div>
     </div>
  </div>
   `
}

let allTheCartQuantities = [0];
let itemsToCart = [];
// CREATING A DUPLICATE OF THE ITEMSTOCART ARRAY TO WORK WITH THE ITEMS THAT ARE BEING DELETED FROM THE CART
let remainingItemsToCart = [];
//

const itemsToCartConfirmation = document.createElement('div')
itemsToCartConfirmation.classList.add('items-to-cart-animation', 'items-to-cart-confirmation');

const shoppingCartHoverItemsContainer = document.querySelector('.shopping-cart-hover-items-container');
const shoppingCartHoverItems = document.createElement('div').cloneNode(true);
shoppingCartHoverItems.classList.add('shopping-cart-hover-items');
const goToCart = document.createElement('div');
goToCart.classList.add('go-to-cart');
goToCart.innerHTML = 'Go to shopping cart &rarr;'

menuItemsContainer.addEventListener('click', function(e) {
  if(!e.target.classList.contains('menu-add-items') && !e.target.classList.contains('menu-remove-items') && !e.target.classList.contains('menu-add-to-cart')) return;

  if (e.target.classList.contains('menu-add-items')) {
    allTheMenuItems[+e.target.dataset.allTheMenuItems][e.target.dataset.menuItem].quantity++;
    allTheMenuItems[+e.target.dataset.allTheMenuItems][e.target.dataset.menuItem].textCounter++;
    e.target.previousElementSibling.textContent = allTheMenuItems[+e.target.dataset.allTheMenuItems][e.target.dataset.menuItem].textCounter;
  };

  if (e.target.classList.contains('menu-remove-items')) {
    if(e.target.nextElementSibling.textContent === '0') return;

    remainingItemsToCart = [];

    allTheMenuItems[+e.target.dataset.allTheMenuItems][e.target.dataset.menuItem].quantity--;
    allTheMenuItems[+e.target.dataset.allTheMenuItems][e.target.dataset.menuItem].textCounter--;
    e.target.nextElementSibling.textContent = allTheMenuItems[+e.target.dataset.allTheMenuItems][e.target.dataset.menuItem].textCounter;
  };

  if(e.target.classList.contains('menu-add-to-cart')) {
    if(e.target.previousElementSibling.previousElementSibling.textContent === '0') return;
    allTheCartQuantities.push(allTheMenuItems[+e.target.dataset.allTheMenuItems][e.target.dataset.menuItem].textCounter);
    shoppingCartQuantity.textContent = allTheCartQuantities.reduce((accumulator, currValue) => accumulator + currValue).toString();
    e.target.previousElementSibling.previousElementSibling.textContent = 0;
    
    itemsToCartConfirmationContainer.appendChild(itemsToCartConfirmation);
    itemsToCartConfirmation.addEventListener('animationend', function() {
      itemsToCartConfirmation.remove();
    })
    itemsToCartConfirmation.textContent = `${allTheMenuItems[+e.target.dataset.allTheMenuItems][e.target.dataset.menuItem].textCounter} ${allTheMenuItems[+e.target.dataset.allTheMenuItems][e.target.dataset.menuItem].name} ${allTheMenuItems[+e.target.dataset.allTheMenuItems][e.target.dataset.menuItem].textCounter === 1 ? 'has been added to your cart.' : 'have been added to your cart.'}`;
    itemsToCart.push(allTheMenuItems[+e.target.dataset.allTheMenuItems][e.target.dataset.menuItem]);
    remainingItemsToCart.push(allTheMenuItems[+e.target.dataset.allTheMenuItems][e.target.dataset.menuItem]);
    allTheMenuItems[+e.target.dataset.allTheMenuItems][e.target.dataset.menuItem].textCounter = 0;

    // DISPLAYING THE ITEMS IN THE CART ON HOVER AND INSERT ITEMS IN THE POPUP CART AND CREATING A DUPLICATE OF THE ITEMSTOCART ARRAY TO WORK WITH THE ITEMS THAT ARE BEING DELETED FROM THE CART
    let itemsToCartFiltered = itemsToCart.map(o => o.name);
    itemsToCart = itemsToCart.filter(({name}, i) => !itemsToCartFiltered.includes(name, i+1));
    remainingItemsToCart = remainingItemsToCart.filter(({name}, i) => !itemsToCartFiltered.includes(name, i+1));
    let totalCartPriceArray = itemsToCart.map(item => item.totalPrice());
    let totalCartPrice = totalCartPriceArray.reduce((acc, currValue) => acc + currValue);
    deliveryProductsTotalCost.textContent = `${totalCartPrice.toFixed(2)} $`;

    shoppingCartHoverItems.innerHTML = '';
    shoppingCartPopupItems.innerHTML = '';
    itemsToCart.forEach((item, i) => {
      // DISPLAYING THE ITEMS IN THE CART ON HOVER
      shoppingCartHoverItemsContainer.appendChild(shoppingCartHoverItems);
      shoppingCartHoverItemsContainer.insertBefore(goToCart, shoppingCartHoverItems.nextElementSibling);
      shoppingCartHoverItems.insertAdjacentHTML('afterbegin', menuItemHoverMarkup(item));
      // INSERT ITEMS IN THE POPUP CART
      shoppingCartPopupItems.insertAdjacentHTML('afterbegin', shoppingCartPopupMarkup(item, i))
    })
  }
})


shoppingCart.addEventListener('click', function(e) {
  if(e.target.classList.contains('shopping-cart-icon') || e.target.classList.contains('go-to-cart')) {
    if(shoppingCartQuantity.textContent > '0') { 
      shoppingCartPopupOverlay.classList.add('shopping-cart-popup-overlay-animation');
      shoppingCartPopup.classList.add('shopping-cart-popup-animation'); 
    }
  }
})

// SHOWING THE SHOPPING CART ON HOVER

shoppingCart.addEventListener('mouseover', function() {
  if(shoppingCartQuantity.textContent === '0') {
  shoppingCartQuantity.classList.add("quantity-animate");
  shoppingCartHover.classList.add("showing-shopping-cart-hover");
}
if(shoppingCartQuantity.textContent > '0')  shoppingCartHoverItemsContainer.classList.add('showing-shopping-cart-hover');

})
shoppingCart.addEventListener('mouseleave', function() {
  shoppingCartHoverItemsContainer.classList.remove('showing-shopping-cart-hover');
  shoppingCartQuantity.classList.remove("quantity-animate");
  shoppingCartHover.classList.remove("showing-shopping-cart-hover");
})


// ADDING, DECREASING, REMOVING ITEMS, CLOSING THE POPUP, SHOWING TOTAL PRICE

shoppingCartPopup.addEventListener('click', function(e) {
  // CLOSE THE POPUP AND UPDATE THE CART INFORMATION ON HOVER AND WHEN CART IS EMPTY
  let closeUpdatePopup = function() {
    // DISPLAYING THE ITEMS IN THE CART ON HOVER
    itemsToCart = remainingItemsToCart;
    shoppingCartHoverItems.innerHTML = '';
    shoppingCartPopupItems.innerHTML = '';
    itemsToCart.forEach((item, i) => {
      shoppingCartHoverItemsContainer.appendChild(shoppingCartHoverItems);
      shoppingCartHoverItemsContainer.insertBefore(goToCart, shoppingCartHoverItems.nextElementSibling);
      shoppingCartHoverItems.insertAdjacentHTML('afterbegin', menuItemHoverMarkup(item));
      shoppingCartPopupItems.insertAdjacentHTML('afterbegin', shoppingCartPopupMarkup(item, i));
    })
    //CLOSE THE POPUP
    shoppingCartPopupOverlay.classList.remove('shopping-cart-popup-overlay-animation');
    shoppingCartPopup.classList.remove('shopping-cart-popup-animation');
  }
   
   if(e.target.classList.contains('cart-popup-item-plus')) {
     let itemmm = 0;
     itemsToCart[e.target.dataset.itemIndex].quantity++;
     allTheCartQuantities.push(1);
     shoppingCartQuantity.textContent = allTheCartQuantities.reduce((accumulator, currValue) => accumulator + currValue).toString();
     e.target.previousElementSibling.textContent = itemsToCart[e.target.dataset.itemIndex].quantity;
     let totalCartPriceArray = itemsToCart.map(item => item.totalPrice());
     let totalCartPrice = totalCartPriceArray.reduce((acc, currValue) => acc + currValue);  
     deliveryProductsTotalCost.textContent = `${totalCartPrice.toFixed(2)} $`;
     remainingItemsToCart.forEach(item => itemmm += item.quantity)     
    };

   if(e.target.classList.contains('cart-popup-item-minus')) {
    if(itemsToCart[e.target.dataset.itemIndex].quantity <= 1) return;
    itemsToCart[e.target.dataset.itemIndex].quantity--;
    allTheCartQuantities.push(-1);
    shoppingCartQuantity.textContent = allTheCartQuantities.reduce((accumulator, currValue) => accumulator + currValue).toString();
    e.target.nextElementSibling.textContent = itemsToCart[e.target.dataset.itemIndex].quantity;
    let totalCartPriceArray = itemsToCart.map(item => item.totalPrice());
    let totalCartPrice = totalCartPriceArray.reduce((acc, currValue) => acc + currValue);  
    deliveryProductsTotalCost.textContent = `${totalCartPrice.toFixed(2)} $`;
  };

    if(e.target.classList.contains('cart-popup-item-trash')) {
      // REMOVING THE ITEM AND SET THE QUANTITY OF THE ITEM TO 0
      const targetParent = e.target.parentElement.parentElement.parentElement;
      allTheCartQuantities.push(Number(-itemsToCart[e.target.dataset.itemIndex].quantity));
      shoppingCartQuantity.textContent = allTheCartQuantities.reduce((accumulator, currValue) => accumulator + currValue).toString();
      itemsToCart[e.target.dataset.itemIndex].quantity = 0;
      let totalCartPriceArray = itemsToCart.map(item => item.totalPrice());
      let totalCartPrice = totalCartPriceArray.reduce((acc, currValue) => acc + currValue);  
      deliveryProductsTotalCost.textContent = `${totalCartPrice.toFixed(2)} $`;
      remainingItemsToCart = remainingItemsToCart.filter((item) => !item.name.includes(itemsToCart[e.target.dataset.itemIndex].name));
      // TRASH ANIMATION WHEN REMOVED
      targetParent.classList.add('popup-item-trash-animation');
      targetParent.addEventListener('animationend', function() {
        targetParent.classList.remove('popup-item-trash-animation');
        targetParent.remove();
      })
      if(shoppingCartQuantity.textContent === '0') {
        closeUpdatePopup();
      }
    }
    
    // CLOSE THE POPUP AND UPDATE THE CART INFORMATION ON HOVER
    if(e.target.classList.contains('go-back-arrow')) {
      // REMOVE THE ANIMATING SHAPES WHEN CLOSING THE POPUP
      closeUpdatePopup();
    }
  })
  
  // GO BACK BUTTON ANIMATION
  goBackArrow.addEventListener('mouseover', function() {
    goBackArrow.classList.add('go-back-arrow-animation');
    goBack.classList.add('go-back-animation');
  })
  goBackArrow.addEventListener('mouseleave', function() {
    goBackArrow.classList.remove('go-back-arrow-animation');
    goBack.classList.remove('go-back-animation');
  })

///////// ABOUT SECTION  ///////////////

let aboutCardCounter = -1;

const aboutCardInterval = function() {
  aboutCardCounter++;
  if(aboutCardCounter === 3) aboutCardCounter = 0;
  aboutSectionCard.forEach(card => card.classList.remove('about-section-card-active'));
  aboutSectionCard[aboutCardCounter].classList.add('about-section-card-active');
  aboutDot.forEach(dot => {
    dot.classList.remove('about-dot-active');
 })
 aboutDot[aboutCardCounter].classList.add('about-dot-active');
}

let aboutInterval = setInterval(aboutCardInterval, 6000);

aboutSlideContainer.addEventListener('click', function(e) {
  if(!e.target.dataset.cardDotNumber) return;
  aboutCardCounter = +e.target.dataset.cardDotNumber;
  clearInterval(aboutInterval);
  aboutInterval = setInterval(aboutCardInterval, 6000);
  aboutSectionCard.forEach(card => card.classList.remove('about-section-card-active'));
  aboutSectionCard[+e.target.dataset.cardDotNumber].classList.add('about-section-card-active');
  aboutDot.forEach(dot => {
     dot.classList.remove('about-dot-active');
     e.target.classList.add('about-dot-active');
  })
})











