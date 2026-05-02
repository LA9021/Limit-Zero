const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu')
hamMenu.addEventListener('click', () => {
	hamMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active');
}); 


//Code for Article Slideshow

const slides = document.querySelectorAll(".slides");
const slideTime = 3000;
let slideCounter = 0;
slides[slideCounter].classList.add("active");

setInterval(nextSlide,slideTime);

function nextSlide() {
	slides[slideCounter].classList.remove("active");
	if(slideCounter != slides.length-1){
		slideCounter++;
	}
	else{slideCounter = 0;
	}
	console.log(slideCounter)
	slides[slideCounter].classList.add("active");
}