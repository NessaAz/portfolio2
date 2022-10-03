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

//PORTFOLIO SWIPER

//TESTIMONIAL 

//SCROLL SECTIONS ACTIVE LINK

//BACKGROUND HEADER CHANGE