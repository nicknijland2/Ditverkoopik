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
		checkScrollNsec();
	});

	setInterval(function () {
		if(window.innerWidth <= 1200) {
			document.querySelector("#nsec2").style.backgroundPositionY = ((window.pageYOffset - document.querySelector("#nsec2").offsetTop) / 3) + "px";
			document.querySelector("#nsec3").style.backgroundPositionY = ((window.pageYOffset - document.querySelector("#nsec3").offsetTop) / 3) + "px";
			document.querySelector("#nsec4").style.backgroundPositionY = ((window.pageYOffset - document.querySelector("#nsec4").offsetTop) / 3) + "px";
			document.querySelector("#nsec4").style.backgroundPositionX = "calc(50% + 75px)";
			document.querySelector("#nsec5").style.backgroundPositionY = ((window.pageYOffset - document.querySelector("#nsec5").offsetTop) / 3) + "px";
		}
	}, 1);

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

			anime({
				targets: '#nsec5 > .-coverpopetulpulii',
				rotate: ["-90deg", 0],
				easing: "easeInOutQuart",
				duration: 2000
			});
		}
	}

	document.querySelector("header > .-phone").style.cssText = "opacity: 0; pointer-events: none;";

	document.querySelector('#nsecrev > .-reviews').addEventListener("scroll", function () {
		document.querySelector('#nsecrev > .-reviews').classList.add("-nosel");
	});

	document.querySelectorAll(".domi-spanify").forEach(el1 => el1.innerHTML = el1.innerHTML.split(" ").map(el2 => "<span style='display: inline-block;'>" + el2 + "</span>").join(" ").replace(/<span style='display: inline-block;'><br><\/span>/g, "<br>"));

	generateReviews(document.querySelector(".splide__list"));

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

function generateReviews(outp) {
	const reviews = _.shuffle([
		{
			pp: "res/pp1.jpeg",
			name: "Ella",
			desc: "Laatst een setje Airpods gekocht, ze werken perfect! Binnen 1 dag geleverd.",
			title: "Perfect! Werkt goed",
			rating: "5"
		},
		{
			pp: "res/pp2.jpeg",
			name: "Mart",
			desc: "Heel aardig, kreeg een gratis screenprotector erbij. Ik raad het zeker aan!",
			title: "Aan te raden!",
			rating: "5"
		},
		{
			pp: "res/pp3.png",
			name: "Achmed",
			desc: "Echt een held! Mijn telefoon was helemaal kapot en dezelfde dag nog helemaal nieuw gemaakt! Ongelooflijk hoe goedkoop ook vergeleken met Apple zelf.",
			title: "Heel snel klaar",
			rating: "5"
		},
		{
			pp: "res/pp4.png",
			name: "Mike",
			desc: "Prachtige nieuwe Macbook Air gekocht voor mijn vriendins verjaardag. Kreeg er zelfs een gratis hoesje bij. Aardige jongen ook, legt je alles uit en helpt je graag.",
			title: "MacBook gekocht",
			rating: "5"
		},
		{
			pp: "res/pp5.png",
			name: "Wilma",
			desc: "Hele aardige jongen. Verplaatste al mijn ouwe gegeven over naar mijn nieuwe telefoon en legde me goed uit hoe alles werkt.",
			title: "Goede service",
			rating: "5"
		},
		{
			pp: "res/pp6.png",
			name: "Finn",
			desc: "Mijn telefoon was helemaal kapot. Kon dezelfde dag nog een iPhone XR krijgen met een schermprotector en hoesje en al.",
			title: "Top telefoon weer",
			rating: "4,5"
		},
		{
			pp: "res/pp7.png",
			name: "Marije",
			desc: "Geüpgraded naar een iPhone 11, Snelle verzending en vooral een goedkope prijs, raad het zeker aan!",
			title: "Fijn toestel en snelle levering!",
			rating: "5"
		},
		{
			pp: "res/pp8.png",
			name: "Miranda",
			desc: "Goede service, snelle levering en goed verpakt. Ik koop hier zeker meer in de toekomst :)",
			title: "Helemaal waard",
			rating: "5"
		},
		{
			pp: "res/pp9.png",
			name: "Henk",
			desc: "Setje Airpods Pro gekocht laatst voor mijn vrouw haar verjaardag!",
			title: "Prima!",
			rating: "4,5"
		},
		{
			pp: "res/pp10.jpeg",
			name: "Martin",
			desc: "Laatst mijn Macbook ingeruilt voor een nieuwe, hele aardige jongen. En goedkoop ook nog. Ik zal hier zeker terug komen.",
			title: "Zeer tevreden!!!",
			rating: "5"
		},
		{
			pp: "res/pp11.png",
			name: "Brunhilde",
			desc: "Ik heb paar weken geleden Airpods2 gekocht voor de verjaardag van mijn zoon. Hij was er heel erg blij mee!",
			title: "Airpods 2 gekocht",
			rating: "5"
		},
		{
			pp: "res/pp4.png",
			name: "Anoniem",
			desc: "Goeie kwaliteit en goedkoop.",
			title: "Prima",
			rating: "5"
		},
		{
			pp: "res/pp13.jpeg",
			name: "Myrthe",
			desc: "Zeker aan te raden! Heb het aan al mijn vrienden verteld om hier een nieuwe telefoon te kopen! ;)",
			title: "Zeker aan te raden :)",
			rating: "4,5"
		},
		{
			pp: "res/pp4.png",
			name: "Anoniem",
			desc: "Schermprotector en hoesje gratis bij mijn telefoon gekregen.",
			title: "Alles erbij gekregen",
			rating: "5"
		},
		{
			pp: "res/pp15.jpeg",
			name: "Jasmine",
			desc: "Ik haal nooit meer een telefoon ergens anders vandaan. Blijf zeker een vaste klant hier!!!",
			title: "Helemaal blij mee",
			rating: "5"
		},
		{
			pp: "res/pp16.jpeg",
			name: "Marcel",
			desc: "Toestel nu twee weken in bezit en zeer tevreden na overstap van mijn iPhone 7.",
			title: "Top verkoper!",
			rating: "5"
		}
	]);

	outp.innerHTML = reviews.map(rev => `<li class="-review splide__slide">
								<div>
									<div class="-user">
										<img src="` + rev.pp + `">
										<h3>` + rev.name + `</h3>
									</div>
									<div class="-msg">
										<h3>` + rev.title + `</h3>
										<p>` + rev.desc + `</p>
										<div class="-stars">
											<i style="color: var(--orange-one);" class="fas fa-star"></i>
											<i style="color: var(--orange-one);" class="fas fa-star"></i>
											<i style="color: var(--orange-one);" class="fas fa-star"></i>
											<i style="color: var(--orange-one);" class="fas fa-star"></i>
											<i style="color: var(--orange-one);" class="fas fa-star` + (rev.rating == "4,5" ? "-half-alt" : "") + `"></i>
										</div>
									</div>
								</div>
							</li>`).join("");
}

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