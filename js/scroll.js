const hero = document.getElementById('header');
const heroBG = document.getElementById('heroBG');
const heroLogo = document.getElementById('Title');

window.addEventListener('scroll', function () {
	hero.style.backgroundSize = 100 + +window.pageYOffset / 8 + '%';
	heroBG.style.opacity = 0 + +window.pageYOffset / 380 + '';
	heroLogo.style.opacity = 1 - +window.pageYOffset / 200 + '';
})

window.addEventListener('scroll', reveal);
window.addEventListener('scroll', btnrevel);


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



