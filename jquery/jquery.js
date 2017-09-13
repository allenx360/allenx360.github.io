





var imgindex=0;
carousel();

function carousel(){
	var i;
	var x = document.getElementsByClassName("carousel_img");
	for (i = 0; i <x.length; i++) {
		x[i].style.display="none";
	}

	imgindex++;
	if (imgindex > x.length) {imgindex = 1}
	x[imgindex-1].style.display = "block";
	setTimeout(carousel,5000);
}