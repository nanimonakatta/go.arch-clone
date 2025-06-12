const main = document.querySelector('.main');
const prevBtn = document.querySelector('.prev-text');
const nextBtn = document.querySelector('.next-text');
const s3prevBtn = document.querySelector('.s3-prev');
const s3nextBtn = document.querySelector('.s3-next');
const pages = document.querySelectorAll('.page');
const section1 = document.querySelector('.section1');
const section3 = document.querySelector('.section3-container');
const gradient = 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65))';
const details = document.querySelector('details');
const smallDevices = window.matchMedia('(max-width: 767px)');
const largeDevices = window.matchMedia('(min-width: 768px)');
const pagesArr = ['page1',
    'page2',
    'page3',
    'page4',
    'page5'
];
const imageArr = [
    './Images/page1.jpeg', 
    './Images/page2.jpeg',
    './Images/page3.jpeg',
    './Images/page4.jpeg',
    './Images/page5.jpeg'
];
const secImgArr = [
    'Images/page1.jpeg',
    'Images/section31.jpeg',
    'Images/section32.jpeg',
    'Images/section33.jpeg',
    'Images/section34.jpeg',
    'Images/section35.jpeg'
];
const secHeadingArr = [
    'concert hall in new york',
    'modern hotel in london', 
    'residential care project in paris', 
    'modern project in rotorua', 
    'architectural marvel in tokyo',
    'wavy building in brasil'
] 
let i = 0;

checkDevice();
changingPages();
loadImageEarly(imageArr);
generateDivs();
scrollLeft();
closeDeails();

smallDevices.addEventListener('change', checkDevice);
largeDevices.addEventListener('change', checkDevice);

function checkDevice() {
    if (smallDevices.matches) {
        details.removeAttribute('open');
    } else if(largeDevices.matches) {
        details.setAttribute('open', 'true');
    }
}
function loadImageEarly(imgArr) {
    imageArr.forEach((img) => {
        const image = new Image();
        image.src = img;
    });
}
function changingPages() {
    prevBtn.addEventListener('click', function() {
        if (i <= 5 && i >= 1) {
            i--;
        }
        if (i >= 1 && i < 5) {
            pages.forEach((page) => {
                if (page.classList.contains(pagesArr[i])) {
                    page.style.opacity = 0;
                    page.style.pointerEvents = 'none';
                } else {
                    page.style.opacity = 0;
                    page.style.pointerEvents = 'none';
                }
                if (page.classList.contains(pagesArr[i - 1])) {
                    page.style.opacity = 1;
                    section1.style.backgroundImage = `${gradient}, url(${imageArr[i - 1]})`;
                    page.style.transform = 'translate(0, 0)';
                    page.style.pointerEvents = 'auto';
                } 
            });
        }
    });
    nextBtn.addEventListener('click', function() {
        if (i === 0) {
            i++;
        }
        if (i >= 1 && i < 5) {
            pages.forEach((page) => {
                if (page.classList.contains(pagesArr[i])) {
                    page.style.opacity = 1;
                    section1.style.backgroundImage = `${gradient}, url(${imageArr[i]})`;
                    page.style.pointerEvents = 'auto';
                } else {
                    page.style.opacity = 0;
                    page.style.pointerEvents = 'none';
                }
                if(page.classList.contains(pagesArr[i - 1])) {
                    page.style.opacity = 0;
                    page.style.transform = 'translate(-50%, 0)';
                    page.style.pointerEvents = 'none';
                }
            });
            i++;
        }
    });
}
function generateDivs() {
    let divsHTML = '';
    for (let i = 0; i < secImgArr.length ; i++) {
        divsHTML += 
        `<div class="section3-page${i + 1} section3-page">
            <div class="overlay">
                <h3>${secHeadingArr[i]}</h3>
                <p>Architecture</p>
                <i class="ri-zoom-in-fill"></i>
            </div>
        </div>
        `;
    }
    section3.innerHTML = divsHTML;
}
function scrollLeft() {
    s3prevBtn.addEventListener('click', function() {
        section3.scrollBy({
            left: -section3.clientWidth / 4,
            behavior: "auto"
        });
    });
    s3nextBtn.addEventListener('click', function() {
        section3.scrollBy({
            left: section3.clientWidth / 4,
            behavior: "auto"
        });
    });
}
function closeDeails() {
    main.addEventListener('click', function() {
        if (smallDevices.matches && details.hasAttribute('open')) {
            details.removeAttribute('open');
        }
    });
}
