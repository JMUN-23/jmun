const hero = document.getElementById('header');
const heroBG = document.getElementById('heroBG');
const heroLogo = document.getElementById('Title');
const heroTitle = document.getElementById('title_ddd');

window.addEventListener('scroll', function () {
	hero.style.backgroundSize = 100 + +window.pageYOffset / 8 + '%';
	heroBG.style.opacity = 0 + +window.pageYOffset / 380 + '';
	heroLogo.style.opacity = 1 - +window.pageYOffset / 200 + '';
	heroTitle.style.opacity = 1 - +window.pageYOffset / 200 + '';
})

window.addEventListener('scroll', reveal);

function reveal() {
	var reveals = document.getElementsByClassName('reveal');

	for (var i = 0; i < reveals.length; i++) {

		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 150;

		if (revealtop < windowheight - revealpoint) {
			reveals[i].classList.add('active');
		}
		else {
			reveals[i].classList.remove('active');
		}
	}


}



const reshero = document.getElementById('reshead');
const resheroBG = document.getElementById('resbg');
const resheroLogo = document.getElementById('Titleres');
const resheroTitle = document.getElementById('restitle_ddd');

if(window.innerWidth > 425 ){
	var start = 250;
}
else {
	var start = 400;
	reshero.style.backgroundSize = start + "%";
}

window.addEventListener('scroll', function () {
	reshero.style.backgroundSize = start + +window.pageYOffset / 10 + '%';
	resheroBG.style.opacity = 0 + +window.pageYOffset / 150 + '';
	resheroLogo.style.opacity = 1 - +window.pageYOffset / 200 + '';
	resheroTitle.style.opacity = 1 - +window.pageYOffset / 200 + '';
})

window.addEventListener('scroll', resreveal);

function resreveal() {
	var resreveals = document.getElementsByClassName('resreveal');

	for (var i = 0; i < resreveals.length; i++) {

		var reswindowheight = window.innerHeight;
		var resrevealtop = resreveals[i].getBoundingClientRect().top;
		var resrevealpoint = 150;

		if (resrevealtop < reswindowheight - resrevealpoint) {
			resreveals[i].classList.add('active');
		}
		else {
			resreveals[i].classList.remove('active');
		}
	}


}



