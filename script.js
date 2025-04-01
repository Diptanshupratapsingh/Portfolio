let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// loader aniumation code //////////////////////////
var la = gsap.timeline(); 

function load(){
    var l = 0
    setInterval(function(){
     l = l + Math.floor(Math.random()*20)
     if(l<100){
        document.querySelector("#loader h1").innerHTML = l+ "%"
     }else{
        l = 100
        document.querySelector("#loader h1").innerHTML = l+ "%"
     }
    },150)
}
load()
la.to("#loader h1",{
    delay:"0.5",
    duration:1,
    onStart:load()
})
la.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:2
})


var nb = gsap.timeline();
nb.from(".flex h3, .navbar",{
    y:-100,
    duration:1,
    delay:4,
    opacity:1,
    stagger:0.2
})

var tl = gsap.timeline();
tl.from(".hero_left_text h2, .hero_left_text h3, .hero_left_text p ,.hero_left_text i",{
    x:-100,
    duration:1,
    delay:4,
    opacity:0,
    stagger:0.3
})


gsap.from(".about .about_content",{
    scale:0,
    delay:1,
    duration:2,
   scrollTrigger:{
          trigger:".about .about_content",
          scroller:"body",
          start:"top 120%",
          end:"top 100%",
          scrub:5
   }
})
gsap.from(".project .project_container, .project .project_content",{
    scale:0,
    delay:1,
    duration:2,
    stagger:0.2,
   scrollTrigger:{
          trigger:".project .project_container, .project .project_content",
          scroller:"body",
          start:"top 120%",
          end:"top 100%",
          scrub:5
   }
})

gsap.from(".skills .heading, .skills h2, .skills .skills_content",{
    scale:0,
    delay:1,
    duration:2,
    stagger:0.2,
   scrollTrigger:{
          trigger:".skills .heading, .skills h2, .skills .skills_content",
          scroller:"body",
          start:"top 120%",
          end:"top 100%",
          scrub:5
   }
})

gsap.from(".contact h1, .contact p",{
    scale:0,
    delay:1,
    duration:2,
    stagger:0.2,
   scrollTrigger:{
          trigger:".contact h1, .contact p",
          scroller:"body",
          start:"top 120%",
          end:"top 100%",
          scrub:5
   }
})
////////////////////////////////// top scroll ////////////////////////////////////////// 
$(document).ready(function(){
	"use strict";
  var offSetTop = 100;
  var $scrollToTopButton = $('.scrollToTop');
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > offSetTop) {
			$scrollToTopButton.fadeIn();
		} else {
			$scrollToTopButton.fadeOut();
		}
	});
	
	//Click event to scroll to top
	$scrollToTopButton.click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});



// ////////////////////////////////////theam change code /////////////////////////////////////// 

