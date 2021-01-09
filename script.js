document.addEventListener("DOMContentLoaded", function () { //Everything in this function runs when page is loaded completely
	
	//Smooth scrolling using jQuery
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) { //Every a tag that links to a hash on the page
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			//Target element
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length) { //If element exists
				event.preventDefault(); //Do not go automatically to the element
				$('html, body').animate({ //Go to the element smoothly
					scrollTop: target.offset().top
				}, 1000, function() {
					var $target = $(target);
					$target.focus();
					if($target.is(":focus")) {
						return false;
					} else {
						$target.attr('tabindex','-1');
						$target.focus();
					};
				});
			}
		}
	});

	document.addEventListener("scroll", function () {
		document.querySelector("header > .-phone").style.cssText = (window.pageYOffset < 500 ? "opacity: 0; pointer-events: none;" : "");

		document.querySelector("#nsec2").style.backgroundPositionY = (window.pageYOffset) + "px";
	});

	document.querySelector("header > .-phone").style.cssText = "opacity: 0; pointer-events: none;";

	document.querySelector('#nsecrev > .-reviews').addEventListener("scroll", function () {
		document.querySelector('#nsecrev > .-reviews').classList.add("-nosel");
	});

	document.querySelectorAll(".domi-spanify").forEach(el1 => el1.innerHTML = el1.innerHTML.split(" ").map(el2 => "<span style='display: inline-block;'>" + el2 + "</span>").join(" ").replace(/<span style='display: inline-block;'><br><\/span>/g, "<br>"));

	new Splide('.splide', {
		type: 'loop',
		gap: "3em",
		autoplay: true,
		pauseOnFocus: true,
		interval: 3500,
		breakpoints: {
			700: {
				arrows: false
			}
		}
	}).mount();

	anime({
		targets: '#nsec2 > .-content',
		translateX: [-150, 0],
		duration: 3000,
		skewX: ["-10deg", "-10deg"]
	});

	anime({
		targets: '#nsec2 > .-covermsg',
		translateY: [-150, 0],
		duration: 3000
	});

	anime({
		targets: '#nsec2 > .-phone',
		translateX: [150, 0],
		rotate: ["-7deg", "-7deg"],
		duration: 3000
	});

	anime({
		targets: '#nsec3 > .-content',
		translateX: [150, 0],
		duration: 3000,
		skewX: ["10deg", "10deg"]
	});

	anime({
		targets: '#nsec3 > .-phone',
		translateX: [-150, 0],
		rotate: ["7deg", "7deg"],
		duration: 3000
	});

	anime({
		targets: '#nsec3 > .-covermsg',
		translateY: [-150, 0],
		duration: 3000
	});

	anime({
		targets: '#nsec4 > .-content',
		translateX: [-150, 0],
		duration: 3000,
		skewX: ["-10deg", "-10deg"]
	});

	anime({
		targets: '#nsec4 > .-covermsg',
		translateY: [-150, 0],
		duration: 3000
	});

	anime({
		targets: '#nsec5 > .-content',
		translateX: [150, 0],
		duration: 3000,
		skewX: ["10deg", "10deg"]
	});
});