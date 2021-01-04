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
	});

	document.querySelector("header > .-phone").style.cssText = "opacity: 0; pointer-events: none;";

	document.querySelector('#nsecrev > .-reviews').addEventListener("scroll", function () {
		document.querySelector('#nsecrev > .-reviews').classList.add("-nosel");
	});

	document.querySelectorAll(".domi-spanify").forEach(el1 => el1.innerHTML = el1.innerHTML.split(" ").map(el2 => "<span style='display: inline-block;'>" + el2 + "</span>").join(" "));

	var vp = setInterval(function () {
		//document.querySelector('#nsecrev > .-reviews').scrollX += 10;
		if(isInViewport(document.querySelector('#nsecrev > .-reviews'))) {
			clearInterval(vp);
			$('#nsecrev > .-reviews').animate({
				scrollLeft: 2000//$('#nsecrev > .-reviews').offset().right
			}, 50000, "linear");
			console.log("!");
		}
	}, 100);
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}