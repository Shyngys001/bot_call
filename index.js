let header = document.getElementById('header');
let services = document.getElementById('service');
let ser = document.getElementsByClassName('ser');
let burgerMenu = document.getElementsByClassName('burger_menu')[0];
let burger = document.getElementsByClassName('burger')[0];
let services2 = document.querySelector('.services');
let subServices = document.querySelector('.sub_services');
let resheniya = document.querySelector('.resheniya');
let subResheniya = document.querySelector('.sub_resheniya');
let reshenie = document.querySelector('#reshenie');
let resh = document.getElementsByClassName('resh');
let form_close = document.getElementById('form_close');
let orderForm = document.getElementById('orderForm');
let chatbox = document.querySelector('.chatbox');


form_close.addEventListener('click', () => {
    orderForm.style.display  = 'none';
})

chatbox.addEventListener('click', () => {
    orderForm.style.display  = 'block';
})


burger.addEventListener('click', () => {
    burgerMenu.style.display = 'block';
    burgerMenu.style.right = '0';
    header.style.display = 'none';
});

close_btn.addEventListener('click', () => {
    burgerMenu.style.display = 'none';
    header.style.display = 'flex';
    subServices.style.display = 'none';
    subResheniya.style.display = 'none';

})





services.addEventListener('mouseenter', () => {
    for (let i = 0; i < ser.length; i++) {
        ser[i].style.display = 'block';
    }
});
services.addEventListener('mouseleave', () => {
    for (let i = 0; i < ser.length; i++) {
        ser[i].style.display = 'none';
    }
});

let firstSerElement = ser[0];

firstSerElement.addEventListener('mouseenter', () => {
    for (let i = 0; i < ser.length; i++) {
        ser[i].style.display = 'block';
    }
});

firstSerElement.addEventListener('mouseleave', () => {
    for (let i = 0; i < ser.length; i++) {
        ser[i].style.display = 'none';
    }
});


reshenie.addEventListener('mouseenter', () => {
    for (let i = 0; i < ser.length; i++) {
        resh[i].style.display = 'block';
    }
});
reshenie.addEventListener('mouseleave', () => {
    for (let i = 0; i < ser.length; i++) {
        resh[i].style.display = 'none';
    }
});

let firstSerElementResh = resh[0];

firstSerElementResh.addEventListener('mouseenter', () => {
    for (let i = 0; i < ser.length; i++) {
        resh[i].style.display = 'block';
    }
});

firstSerElementResh.addEventListener('mouseleave', () => {
    for (let i = 0; i < ser.length; i++) {
        resh[i].style.display = 'none';
    }
});






window.addEventListener('scroll', function() {
    var button = document.querySelector('.shyn_f1');
    var windowPosition = window.scrollY + window.innerHeight;
    var buttonPosition = button.offsetTop;
    
    if (windowPosition > buttonPosition + 100) {
        button.classList.add('appear');
    }

    if(window.scrollY > 40){
        header.classList.add('header--transparent');
    }
    else {
        header.classList.remove('header--transparent');
    }

});


function displayMessage() {
    const messageElement = document.querySelector('.message');
    messageElement.style.opacity = '1';
    setTimeout(() => {
      messageElement.style.opacity = '0';
    }, 1500); 
  }
  
  setInterval(displayMessage, 5000); 
  



services2.addEventListener('click', () => {
    subServices.style.display = 'block';
    subResheniya.style.display = 'none';
    if (subServices.classList.contains('active')) {
        subServices.classList.remove('active');
    } else {
        subServices.classList.toggle('active');
    }
  

});

resheniya.addEventListener('click', () => {
    subServices.style.display = 'none';
    subResheniya.style.display = 'block';
    if (subResheniya.classList.contains('active')) {
        subResheniya.classList.remove('active');
    } else {
        subResheniya.classList.toggle('active');
    }
});

