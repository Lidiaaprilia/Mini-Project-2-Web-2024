//------------------------------------------NAVIGATION BAR FUNCTION-------------------------------------------------------//
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");
  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

//-----------------------------------------------SHADOW ON NAVIGATION BAR-------------------------------------------------//
window.onscroll = function() {headerShadow()};
function headerShadow() {
  const navHeader =document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

//------------------------------------------------TYPING EFFECT-----------------------------------------------------------//
var typingEffect = new Typed(".typedText",{
  strings : ["Information System Student",],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})

//---------------------------------------------SCROLL REVEAL ANIMATION----------------------------------------------------//
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

//---------------------------------------------------HOME-----------------------------------------------------------------//
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

//----------------------------------------------EDUCATION BOX-------------------------------------------------------------//
sr.reveal('.education-box',{interval: 200})

//--------------------------------------------------HEADINGS--------------------------------------------------------------//
sr.reveal('.top-header',{})

//--------------------------------------ABOUT INFO AND CONTACT INFO-------------------------------------------------------//
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})
srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

//--------------------------------------ABOUT SKILLS & CONTACT FORM-------------------------------------------------------//
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})
srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

//-------------------------------------------CHANGE ACTIVE LINK-----------------------------------------------------------//
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
const scrollY = window.scrollY;
sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')
  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
  }  else {
    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
  }
})
}

//---------------------------------------------------CONTACT FORM---------------------------------------------------------//
function message(){
  var Name = document.getElementById('name');
  var email = document.getElementById('email');
  var msg = document.getElementById('msg');
  const success = document.getElementById('success');
  const danger = document.getElementById('danger');
  if(Name.value === '' || email.value === '' || msg.value === ''){
      danger.style.display = 'block';
  }
  else{
      setTimeout(() => {
          Name.value = '';
          email.value = '';
          msg.value = '';
      }, 2000);
      success.style.display = 'block';
  }
  setTimeout(() => {
      danger.style.display = 'none';
      success.style.display = 'none';
  }, 4000);
}

//-----------------------------------------------LOCAL STORAGE------------------------------------------------------------//
function sendMessage() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('msg').value;
  
  if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
      const data = {
          name: name,
          email: email,
          message: message
      };
      
      // Menyimpan data ke dalam Local Storage
      let messages = JSON.parse(localStorage.getItem('messages')) || [];
      messages.push(data);
      localStorage.setItem('messages', JSON.stringify(messages));
      
      // Menampilkan pesan sukses
      document.getElementById('success').style.display = 'block';
      document.getElementById('danger').style.display = 'none';
      
      // Membersihkan input field
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('msg').value = '';
  } else {
      // Menampilkan pesan error jika ada input yang kosong
      document.getElementById('success').style.display = 'none';
      document.getElementById('danger').style.display = 'block';
  }
}

//-----------------------------------------------------LOGO---------------------------------------------------------------//
const logo = document.getElementById("logo");

//--------------------------------------------------DARK THEME-----------------------------------------------------------//
document.addEventListener("DOMContentLoaded", function() {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const moonIcon = document.querySelector(".moon-icon");
  const sunIcon = document.querySelector(".sun-icon");
  // Fungsi untuk mengubah mode gelap
  function toggleDarkMode() {
      document.body.classList.toggle("dark");
  }
  // Tambahkan event listener untuk mengaktifkan toggle mode gelap
  darkModeToggle.addEventListener("click", function(event) {
      event.preventDefault();
      toggleDarkMode();
      // Tampilkan ikon yang sesuai berdasarkan mode gelap yang aktif
      if (document.body.classList.contains("dark")) {
          moonIcon.style.display = "none";
          sunIcon.style.display = "inline-block";
      } else {
          moonIcon.style.display = "inline-block";
          sunIcon.style.display = "none";
      }
  });
});

window.addEventListener('scroll', scrollActive)
