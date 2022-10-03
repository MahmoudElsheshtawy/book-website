window.onscroll= () =>{
    searchform.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeDut();
}
function loader(){
  document.querySelector('.loader-container').classList.add('active');

}
function fadeDut(){
  setTimeout(loader, 4000);
};

window.onload= () =>{

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
    fadeDut();
    
}


 searchform = document.querySelector('.search-form');
 
   document.querySelector('#search-btn').onclick = () =>{
   searchform.classList.toggle('active');
  }


 loginform = document.querySelector('.login-form-container');

  document.querySelector('#login-btn').onclick = () =>{

    loginform.classList.toggle('active')

  }


document.querySelector('#close-login-btn').onclick = () => {

    loginform.classList.remove('active')
   
}








var swiper = new Swiper(".book-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".featured-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1020: {
        slidesPerView: 4,
      },
    },
});

var swiper = new Swiper(".arrivals-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});
var swiper = new Swiper(".arrivals-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1020: {
        slidesPerView: 4,
      },
    },
});


// raviews-slider


var swiper = new Swiper(".raviews-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
      delay: 4500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1020: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1020: {
      slidesPerView: 4,
    },
  },
});

