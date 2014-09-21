document.getElementById("open").addEventListener("click", function () {

	var ref = window.open("https://www.google.com", "_blank", "location=yes");

	ref.addEventListener("loadstart", function () {
		console.log("START");
	});

	ref.addEventListener("loadstop", function () {
		console.log("STOP");
	});

}, false);
