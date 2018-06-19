var otherWindows = chrome.extension.getBackgroundPage();
var mode = 0;

function week() {
	document.getElementById("month").style.backgroundColor = "white";
	chrome.storage.sync.get(['color'], function(data) {
		document.getElementById("week").style.backgroundColor = data.color;
	});

	mode = 0;
}

week();

chrome.storage.sync.get(['color'], function(data) {
	document.getElementById("week").style.backgroundcolor = data.color;
});

function month() {
	console.log("month")
	document.getElementById("week").style.backgroundColor = "white";
	chrome.storage.sync.get(['color'], function(data) {
		document.getElementById("month").style.backgroundColor = data.color;
		console.log(data.color)
	});

	mode = 1;
}


setInterval(function(){

	if (mode == 0) {
		var percent = Math.round(otherWindows.timespent*100/otherWindows.totaltime);

		interval = otherWindows.timespent;
	}
	else {
			var percent = Math.round(otherWindows.monthpercent*100);

		interval = otherWindows.monthtimespent;
	}

	var secPerMinute = 60;  
	var secPerHour = secPerMinute * 60;  
	var secPerDay = secPerHour * 24;  

	var days = Math.floor(interval / secPerDay );  
	interval = interval - (days * secPerDay );  

	// Calculate the hours, minutes, and seconds.  
	var hours = Math.floor(interval / secPerHour );  
	interval = interval - (hours * secPerHour );  

	var minutes = Math.floor(interval / secPerMinute );  
	interval = interval - (minutes * secPerMinute );  

	var seconds = Math.floor(interval);

	seconds = ('000' + seconds).substr(-2);
	minutes = ('000' + minutes).substr(-2);
	hours = ('000' + hours).substr(-2);
	days = ('000' + days).substr(-2);


	document.getElementById("Percents").innerHTML = percent + "%";
	document.getElementById("Times").innerHTML = hours + ":" + minutes + ":" + seconds;
	console.log(otherWindows.todaytrack);
}, 1000);




document.getElementById('week').addEventListener('mouseover',
    week);
document.getElementById('month').addEventListener('mouseover',
    month);