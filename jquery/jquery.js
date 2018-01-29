var imgindex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("carousel_img");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}

	imgindex++;
	if (imgindex > x.length) {
		imgindex = 1;
	}
	x[imgindex - 1].style.display = "block";
	setTimeout(carousel, 5000);
}


window.onscroll = function() {scrollFunction();};
//document.getElementsByClassName("nav_bar").style.position = "fixed";
//ERROR:Cannot set property 'display' of undefined
//http://javascript.qahowto.com/Cannot-set-property-display-of-undefined-javascript-css-ba1283

// document.getElementsByClassName("nav_bar")"[0]".style.position = "fixed";


function scrollFunction() {
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    document.getElementsByClassName("nav_bar")[0].style.position = "fixed";
    document.getElementsByClassName("nav_bar")[0].style.top = "0";
  } else {
    document.getElementsByClassName("nav_bar")[0].style.position = "static";
  }
}