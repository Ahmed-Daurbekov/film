const images = document.querySelectorAll('.img');
const sliderLine = document.querySelector('.slider .slider-line');
const dots = document.querySelectorAll('.dot');
let count = 0;
let width;

function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.button-next').addEventListener('click', function () {
    count++;
    
    if (count >= images.length) {
        count = 0;
    }
    
    let dotCount = count
    if(dotCount == 0) {
        dots.forEach(item => {
            dots[dotCount].style.background = 'red'
            dots[dotCount+1].style.background = 'white'
        })
    } else {
        dots.forEach(item => {
            dots[dotCount-1].style.background = 'white'
            dots[dotCount].style.background = 'red'
        })
    }
    rollSlider();
});

document.querySelector('.button-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    
    let dotCount = count
    if(dotCount == 0) {
        dots.forEach(item => {
            dots[dotCount+1].style.background = 'white'
            dots[dotCount].style.background = 'red'
        })
    } else {
        dots.forEach(item => {
            dots[dotCount].style.background = 'red'
            dots[dotCount-1].style.background = 'white'
        })
    }
    rollSlider();
});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        dots.forEach(item => {
            item.style.background = '#fff'
        })
        dot.style.background = 'red'

        count = parseInt(e.target.dataset.dot)
        rollSlider()
    })
})

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

// document.querySelector('.header_button_play-video').addEventListener('click', () => {
//     document.querySelector('.video-block').classList.remove('hide')
//     document.querySelector('.header').classList.add('hide')
// })

// document.querySelector('.video-block__button_stop-video').addEventListener('click', () => {
//     document.querySelector('.header').classList.remove('hide')
//     document.querySelector('.video-block').classList.add('hide')
// })
// scroll top
const navbar = document.querySelector('.navbar');
const navbarBg = document.querySelector('.navbar__bg')
const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', e => {
    if(window.pageYOffset >= 100) {
        navbar.style.padding = '15px';
        navbarBg.style.background = '#2b2b2b'
    } else {
        navbar.style.padding = '35px 15px'
        navbarBg.style.background = 'none'
    }

    if(window.pageYOffset >= 150) {
        scrollTop.style.display = 'block';
    } else {
        scrollTop.style.display = 'none';
    }
})

scrollTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
const menu = document.querySelectorAll('.menu');
const showMenu = document.querySelectorAll('.b-menu');
const hideMenu = document.querySelectorAll('.b-menu__close');

showMenu.forEach(btn => {
    btn.addEventListener('click', () => {
        menu.forEach(menu => {
            menu.style.display = 'block'
        })
    })
})

hideMenu.forEach(btn => {
    btn.addEventListener('click', () => {
        menu.forEach(menu => {
            menu.style.display = 'none'
        })
    })
})

window.addEventListener('resize', (e) => {
    if(e.target.innerWidth > 768) {
        menu.forEach(menu => {
            menu.style.display = 'flex'
        })
    } else if (e.target.innerWidth < 768) {
        menu.forEach(menu => {
            menu.style.display = 'none'
        })
    }
})


let hour = document.getElementById('hour')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

function getTime() {
    let newDate = new Date()
    let hourOut = newDate.getHours().toString()
    let minutesOut = newDate.getMinutes().toString()
    let secondsOut = newDate.getSeconds().toString()

    if(hourOut.length < 2) {
        hourOut = '0' + hourOut
    }

    if(minutesOut.length < 2) {
        minutesOut = '0' + minutesOut
    }

    if(secondsOut.length < 2) {
        secondsOut = '0' + secondsOut
    }

    hour.innerHTML = hourOut
    minutes.innerHTML = minutesOut
    seconds.innerHTML = secondsOut
}

getTime()
setInterval(getTime, 1000);
// section-2 number

const dataCount = document.querySelectorAll('.counter-box__count');

// scrollToStartCounter()
function scrollToStartCounter() {
    dataCount.forEach(item => {
        item.innerHTML = '0'
    
        const updateNumber = () => {
            const target = +item.dataset.target 
            const currentNumber = +item.innerHTML
    
            const increment = target / 100
    
            if(currentNumber < target) {
                item.innerHTML = `${Math.ceil(currentNumber + increment)}`;
                setTimeout(updateNumber, 10)
            } else {
                item.innerHTML = target
            }
        }
    
        updateNumber()
    })
}
// section video
const overlaySheetLeft = document.querySelector('.overlay-sheet__left')
const overlaySheetRight = document.querySelector('.overlay-sheet__right')


function overlaySheetActive() {
    overlaySheetLeft.style.transform = 'translateX(-110%)'
    overlaySheetRight.style.transform = 'translateX(110%)'
}

// section-email
document.querySelector('.email-block__email').addEventListener('focus', () => {
    document.querySelector('.email-lable').classList.add('email-lable__active')
})
document.querySelector('.email-block__email').addEventListener('blur', () => {
    document.querySelector('.email-lable').classList.remove('email-lable__active')
})

// video-slider
const btnPrev = document.querySelector('.slider_video-button-prev');
const btnNext = document.querySelector('.slider_video-button-next');
const sliderWidth = document.querySelector('.slider-line__card').offsetWidth

window.addEventListener('resize', () => {
    // console.log(sliderWidth);
})

let translate = 0

btnNext.addEventListener('click', () => {
    let videoSliders = document.querySelector('.video-sliders').offsetWidth;
    console.log(videoSliders);
    if(videoSliders > 1080) {
        // console.log('width more 1080');
        translate = translate + (sliderWidth + 30)
            if(translate > 0) {
                translate = -(sliderWidth + 30)
            }
        document.querySelector('.video-slider__line').style.transform = `translateX(${translate}px)`
    } else if (videoSliders > 600 || videoSliders < 1080) {
        console.log('width more 425');
        translate = translate - (sliderWidth + 30)
        if(translate < -780) {
            translate = 0
        }
        document.querySelector('.video-slider__line').style.transform = `translateX(${translate}px)`
    }
})

btnPrev.addEventListener('click', () => {
    let videoSliders = document.querySelector('.video-sliders').offsetWidth;
    // console.log(videoSliders);
    if(videoSliders > 1080) {
        // console.log('width more 1080');
        translate = translate - (sliderWidth + 30)
            if(translate < -(sliderWidth + 30)) {
                translate = 0
            }
        document.querySelector('.video-slider__line').style.transform = `translateX(${translate}px)`
    } else if (videoSliders > 425 || videoSliders < 1080) {
        // console.log('width more 425');
        translate = translate + (sliderWidth + 30)
        if(translate > 0) {
            translate = -780
        }
        document.querySelector('.video-slider__line').style.transform = `translateX(${translate}px)`
    } else if (videoSliders < 595) {
        console.log('width more 320');
        // translate = translate - (sliderWidth + 30)
        // console.log(translate);
        // document.querySelector('.video-slider__line').style.transform = `translateX(${translate}px)`
    }
})

let menuItem = document.querySelectorAll('.menu__link')
let scrollUp = document.querySelector('.scroll-top')

menuItem.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault()
        addClass(this)
        scrollBefore(this)
    })
})

function addClass(item) {
    menuItem.forEach(item => {
        item.classList.remove('menu__link_active')
    })
    item.classList.add('menu__link_active')
}

function scrollBefore(item) {
    console.log(item);
    let id = item.getAttribute('href')
    let selector = document.querySelector(id)
    
    selector.scrollIntoView({
        block: "start",
        behavior: "smooth"
    });
};