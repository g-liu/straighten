const PI = 3.14159265358979323846;

window.onload = function() {
	document.getElementById("results").style.display = "none";
	document.getElementById("calculate").onclick = calculateCrop;

	prepopulate();
}

function calculateCrop() {
	remember();

	var cropAngle = Math.abs(document.getElementsByName("crop-angle")[0].value);
	var imageWidth = document.getElementsByName("image-width")[0].value;
	var imageHeight = document.getElementsByName("image-height")[0].value;

	var cropRatio = Math.tan(degToRad(cropAngle));
	var verticalCrop = cropRatio * imageWidth;
	var sideCrop = cropRatio * imageHeight;

	document.getElementById("img-width").innerHTML = Math.floor(imageWidth - sideCrop);
	document.getElementById("img-height").innerHTML = Math.floor(imageHeight - verticalCrop);

	document.getElementById("results").style.display = "";
}

function prepopulate() {
	var cropAngle = window.localStorage.getItem("cropAngle");
	if (cropAngle) {
		document.getElementsByName("crop-angle")[0].value = cropAngle;
	}
	var imageWidth = window.localStorage.getItem("imageWidth");
	if (imageWidth) {
		document.getElementsByName("image-width")[0].value = imageWidth;
	}
	var imageHeight = window.localStorage.getItem("imageHeight");
	if (imageHeight) {
		document.getElementsByName("image-height")[0].value = imageHeight;
	}
}

function remember() {
	var cropAngle = document.getElementsByName("crop-angle")[0].value;
	var imageWidth = document.getElementsByName("image-width")[0].value;
	var imageHeight = document.getElementsByName("image-height")[0].value;

	window.localStorage.setItem("cropAngle", cropAngle);
	window.localStorage.setItem("imageWidth", imageWidth);
	window.localStorage.setItem("imageHeight", imageHeight);
}

function degToRad(angle) {
	return angle * PI / 180;
}
