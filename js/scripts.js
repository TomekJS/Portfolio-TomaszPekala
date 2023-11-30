/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

new WOW().init();


const date = new Date().toDateString();
const year = date.slice(-5)
const footer =`Copyright © Tomasz Pękala ${year}`
document.getElementById("year").innerHTML =footer;


// modal 


// $$$$$$$$$$$$$$$$$$$$$ MODAL $$$$$$$$$$$$$$$$$$$$$$$$$$$$
const modal = document.getElementById("myModal");

let buttons = document.querySelectorAll(".btnCategory");
let singleButton = ''

const buttonArr = Array.from(buttons)
let elementId = '';

singleButton = buttonArr.forEach((btn) =>{

    const id = btn.id
    let idNumber = parseInt(id.slice((0,-1)));
    id.slice(0,-1)

    const getButton = document.getElementById(id);
    const getButtonNumber = parseInt(getButton.name);

    getButton.onclick = (e) =>{
        if( idNumber === getButtonNumber & getButtonNumber === 1) {
            modal.style.display ="block"
            modal.innerHTML = 
            `<div class="modal-content">
                         <div class="modal-header">
                           <span class="close">&times;</span>
                           <h2 class="text-center">Opis</h2>
                        </div>
                          <div class="modal-body">
                          <p>Przez wiele lat pracowałem jako magazynier. Zawsze gdy szedłem do pracy to traktowałem ją jakby, to była moja własna firma. Starałem się dawać z siebie wszystko dla dobra firma. Pewnego razu zastanowiłem się co mógłbym zrobić, by wnieść wartość przedsiębiorstwu. Wymyśliłem kilka pomysłów, a następnie wydrukowałem je i zaniosłem kierownikowi. On wybrał jedną najlepszą i wprowadził w życie przez co przedsiębiorstwo zyskało korzyść.
                      </div>
                        <div class="modal-footer">
                          <h3></h3>
                         </div>
                      </div> `
        }
        else if( idNumber === getButtonNumber & getButtonNumber === 2) {
            modal.style.display ="block"
            modal.innerHTML = 
            `<div class="modal-content">
                         <div class="modal-header">
                           <span class="close">&times;</span>
                           <h2 class="text-center">Opis</h2>
                        </div>
                          <div class="modal-body">
                          <p>Jedną z moim pasji jest programowanie, z powodów zdrowotnym musiałem zaprzestać chwilowo kodowanie. W czasie nauki wykonałem wiele projektów, oto niektóre z nich:

                          <p>
                            <a href="https://tomaszpekala231.github.io/CounterCalorie/" >Kalkulator kalorii</a>
                          </p>

                          <p>
                          <a href="https://tomaszpekala231.github.io/Photobuy" >Sklepik w czystym Javascript</a>
                          </p>

                      </div>
                        <div class="modal-footer">
                          <h3></h3>
                         </div>
                      </div> `
        } 
       else if( idNumber === getButtonNumber & getButtonNumber === 3) {
            modal.style.display ="block"
            modal.innerHTML = 
            `<div class="modal-content">
                         <div class="modal-header">
                           <span class="close">&times;</span>
                           <h2 class="text-center">Opis</h2>
                        </div>
                          <div class="modal-body">
                         Już w wieku 16 lat zacząłem się interesować rozwojem osobistym. Powodem było to że byłem bardzo słaby z dziewczynami, tak beznadziejny jak tylko możesz sobie wyobrazić. Zawsze wszelkie zaproszenie znajomych na imprezę budziły we mnie wielki strach. To nie tak tylko, że nie umiałem zainteresować sobą dziewczynę, ale ogólnie bardzo bałem się ludzi i całą młodość spędzałem przed komputerem zamiast spędzać czas z ludźmi i się rozwijać. W pewnym momencie podjąłem twardą decyzję, że stanę się najlepszą wersją samego siebie i zrobie wszystko co konieczne by się rozwinąć i stać się dobry z kobietami. Wiem dobrze jaki to wielki ból, gdy nie potrafi się zainteresować dziewczyny sobą albo gdy nie ma się wyboru. Wiem, że gdybym miał kogoś z kim razem mógłym wychodzić, szybciej bym się rozwinął i oszczędził sobie wiele łez i smutku. Dawniej podejście z intencją poznania dziewczyny w galerii, parku, przystanku, ulicy itp. wydawało się kompletnie niemożliwe. Dzisiaj nie mam z tym problemu. Jeśli jesteś w podobnej sytuacji skontaktuj się ze mną, napewno na współpracy ze mną skorzystasz. Wszystko uzgodniliby razem wspólnie co, gdzie i kiedy.
                      </div>
                        <div class="modal-footer">
                          <h3></h3>
                         </div>
                      </div> `
        }
    }
    
})

const closeBtn = document.querySelector('.close');
console.log()

window.onclick = (event) => {
    console.log(event.target.className)
    if (event.target == modal || event.target.className =="close") {
      modal.style.display = "none";
    }
  }
