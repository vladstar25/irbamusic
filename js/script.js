window.onload = function ()
{
	var bigPhoto = document.getElementById("bigPhoto");
	bigPhoto.onclick = hidePhoto;
}
function showPhoto () 
{
	var shadow = document.getElementById("shadow");
	var bigPhoto = document.getElementById("bigPhoto");
	shadow.style.display = "block";
	bigPhoto.style.display = "block";
	bigPhoto.style.backgroundImage = "url('"+this.src+"')";
}
function hidePhoto ()
{
	var shadow = document.getElementById("shadow");
	var bigPhoto = document.getElementById("bigPhoto");
	shadow.style.display = "";
	bigPhoto.style.display = "";
}
function controlMail () 
{
	var a = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	var inp = document.getElementById('inp');
	if (inp.value.search(a) !==-1) {
		document.getElementById('subm').disabled=0 ;
	} else {
		document.getElementById('subm').desabled=1 ;
	}
}