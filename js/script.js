// MENU SHOW Y HIDDEN
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('close-nav')

//SHOW MENU
//validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

//HIDE MENU
//validate if constant exists
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}



//REMOVE MENU ON MOBILE
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //clicking a nav link removes the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))



//ACCORDION SKILLS
const skillsContent = document.getElementsByClassName('skills-content'),
      skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for ( i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills-content skills-close'
    }
    if(itemClass === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open'
    }
}      

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})


//QUALIFICATION TABS
// const tabs = document.querySelectorAll('[data-target]'),
//       tabContents = document.querySelectorAll('[data-content]')

// tabs.forEach(tab =>{
//     tab.addEventListener('click', () =>{
//         const target = document.querySelector(tab.dataset.target)

//         tabContents.forEach(tabContent =>{
//             tabContent.classList.remove('qualification-active')
//         })

//         target.classList.add('qualification-active')

//         tabs.forEach(tab =>{
//             tab.classList.remove('qualification-active')
//         })
//         tab.classList.add('qualification-active')
//     })
// })      



//SERVICES MODAL
const modalViews = document.querySelectorAll('.services-modal'),
      modalBtns = document.querySelectorAll('.services-button'),
      modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}      

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})


//PROJECT SWIPER
// import Swiper from 'swiper/swiper-bundle.esm.js';
// import 'swiper/swiper-bundle.css';
// let swiper = new Swiper('.project-container', {
//     cssMode: true,
//     loop: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     }
// });

//TESTIMONIAL 

//SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


//BACKGROUND HEADER CHANGE


//DARK-LIGHT THEME
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const darkTheme = 'uil-moon'

//previously selected topic; if user selected
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//obtain the current theme that the interface has by validating the light theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light': 'dark'
const getCurrentIcon = () => themeButton.classList.contains(darkTheme) ? 'uil-sun': 'uil-moon'


//validate if user previously chose a topic
if (selectedTheme){
    //if validation was fulfilled we ask what the issue was to know if activated
    document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'uil-sun' ? 'add' : 'remove'](darkTheme)
}

//activate/deactivate theme manually with button
themeButton.addEventListener('click', () =>{
    // add/remove icon/dark theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(darkTheme)

    //saving the chosen theme and icon
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



//contact form
const thename = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');
  
const validate = (e) => {
  e.preventDefault();
 
  if (thename.value.length < 3) {
    errorElement.innerHTML = 'Your name should be at least 3 characters long.';
    return false;
  } 
  
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  } 

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = 'Please write a longer message.';
    return false;
  }

  errorElement.innerHTML = '';
  successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 6000);

  return true;

}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);


/*Pop up alert*/
$('button#submit').click(function(){
    let name=$('input#name').val()
    if(name==""){
        alert("Please fill the form")
    }
    else {
        alert(`${name}, I have received your message.Thank you for reaching out.`)
    }
})