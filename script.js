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

	var nsec2scrolled = false, nsec3scrolled = false, nsec4scrolled = false, nsec5scrolled = false;

	document.addEventListener("scroll", function () {
		document.querySelector("header > .-phone").style.cssText = (window.pageYOffset < 500 ? "opacity: 0; pointer-events: none;" : "");

		document.querySelector("#nsec2").style.backgroundPositionY = (window.pageYOffset) + "px";

		checkScrollNsec();
	});

	checkScrollNsec();

	function checkScrollNsec() {
		if(!nsec2scrolled && isInViewport(document.querySelector('#nsec2'))) {
			nsec2scrolled = true;

			anime({
				targets: '#nsec2 > .-content',
				translateX: [-150, 0],
				skewX: ["-10deg", "-10deg"],
				duration: 3000
			});

			anime({
				targets: '#nsec2 > .-covermsg',
				translateY: [-150, 0],
				delay: 100,
				duration: 3000
			});

			anime({
				targets: '#nsec2 > .-phone',
				translateX: [150, 0],
				rotate: ["-7deg", "-7deg"],
				delay: 200,
				duration: 3000
			});
		}

		if(!nsec3scrolled && isInViewport(document.querySelector('#nsec3'))) {
			nsec3scrolled = true;

			anime({
				targets: '#nsec3 > .-content',
				translateX: [150, 0],
				skewX: ["10deg", "10deg"],
				duration: 3000
			});

			anime({
				targets: '#nsec3 > .-phone',
				translateX: [-150, 0],
				rotate: ["7deg", "7deg"],
				duration: 3000,
				delay: 100
			});

			anime({
				targets: '#nsec3 > .-covermsg',
				translateY: [-150, 0],
				delay: 200,
				duration: 3000
			});
		}

		if(!nsec4scrolled && isInViewport(document.querySelector('#nsec4'))) {
			nsec4scrolled = true;

			anime({
				targets: '#nsec4 > .-content',
				translateX: [-150, 0],
				skewX: ["-10deg", "-10deg"],
				duration: 3000
			});

			anime({
				targets: '#nsec4 > .-covermsg',
				translateY: [-150, 0],
				duration: 3000,
				delay: 100
			});
		}

		if(!nsec5scrolled && isInViewport(document.querySelector('#nsec5'))) {
			nsec5scrolled = true;

			anime({
				targets: '#nsec5 > .-content',
				translateX: [150, 0],
				skewX: ["10deg", "10deg"],
				duration: 3000
			});
		}
	}

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
});

function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.left <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

function isInViewportFull(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}