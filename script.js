// Set the date we're counting down to
var countDownDate = new Date("Sep 16, 2023 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="countdown-demo"
	document.getElementById("countdown-demo").innerHTML =
		days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

	document.getElementById("cd-day").innerHTML = days + "d";
	document.getElementById("cd-hour").innerHTML = hours + "h";
	document.getElementById("cd-minute").innerHTML = minutes + "m";
	document.getElementById("cd-second").innerHTML = seconds + "s";

	// If the count down is over, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown-demo").innerHTML = "EXPIRED";
	}
}, 1000);
