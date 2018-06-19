chrome.storage.sync.get(['color'], function(data) {
	document.body.style.backgroundColor = data.color;
});

var saved_date = new Date();
var now = new Date();
var passed = [19.1, 97.7, 100, 60];
var left = [0, 0, 40, 25];

chrome.storage.sync.get(['now'], function(data) {
	now = new Date(data.now);

	chrome.storage.sync.get(['date'], function(data) {
		saved_date = data.date;
		function hslToHex(h, s, l) {
		  h /= 360;
		  s /= 100;
		  l /= 100;
		  let r, g, b;
		  if (s === 0) {
		    r = g = b = l; // achromatic
		  } else {
		    const hue2rgb = (p, q, t) => {
		      if (t < 0) t += 1;
		      if (t > 1) t -= 1;
		      if (t < 1 / 6) return p + (q - p) * 6 * t;
		      if (t < 1 / 2) return q;
		      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
		      return p;
		    };
		    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		    const p = 2 * l - q;
		    r = hue2rgb(p, q, h + 1 / 3);
		    g = hue2rgb(p, q, h);
		    b = hue2rgb(p, q, h - 1 / 3);
		  }
		  const toHex = x => {
		    const hex = Math.round(x * 255).toString(16);
		    return hex.length === 1 ? '0' + hex : hex;
		  };
		  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
		}


		var total = 648;


		var compare_date = new Date(saved_date); 
		var today = new Date();  
		var intervaltwo = Math.abs(compare_date.getTime() - today.getTime());  

		if (compare_date < today) {
			var fraction = intervaltwo / (1000 * 60 * 60 * 24 * 365 * 100);
		}

		else {
			var fraction = 1 - (intervaltwo / Math.abs(compare_date.getTime() - now.getTime()));
			console.log(fraction);
		}


		var current = fraction * total;
		current = Math.round(current);


		// var container = document.getElementById("circles");
		// for (var i = 0; i < total; i++) {
		// 	var circleid = "circle" + i
		//    container.innerHTML += '<svg height="2.5vw" width="2.5vw"> <circle id = \"' + circleid + '\" cx="1.25vw" cy="1.25vw" r="1.2vw"/></svg>';
		// }

	chrome.storage.sync.get(['passed', 'left'], function(data) {
			passed = data.passed;
			passed = passed.split(",");
			left = data.left;
			left = left.split(",");
			console.log(passed)
			console.log(left)


			for (i = 0; i < current; i++) {
				id = i;
				var percentage = passed[2] - (i*(passed[2] - passed[3])/current);

				document.getElementById(id).style.fill = hslToHex(passed[0], passed[1], percentage);
			}


			for (i = current; i < total; i++) {
				id = i;
				var percentage = left[2] - (i*(left[2] - left[3])/total);

			    document.getElementById(id).style.fill = hslToHex(left[0], left[1], percentage);
			}


		});
	});
});

	document.getElementById("time").onmouseover = function() {on()};
	document.getElementById("time").onclick = function() {test()};
	document.getElementById("time").onmouseout = function() {off()};


	function on() {
	    document.getElementById("overlay").style.opacity = "0.3";

	}

	function off() {
	    document.getElementById("overlay").style.opacity = "0";

	}


setInterval(function(){ 

	compare_date = new Date(saved_date);
	var today = new Date();
	if (compare_date < today) {
		var date = compare_date;  
		var date2 = today
	}

	else {
		var date = today;  
		var date2 = compare_date;
	}

	var years = date2.getFullYear() - date.getFullYear();  

	// Reset birthday to the current year.  
	date.setFullYear(date2.getFullYear());  

	// If the user's birthday has not occurred yet this year, subtract 1.  
	if (date2 < date)  
	{  
	    date.setFullYear(date2.getFullYear() - 1);  
	    years--;
	}  


	var msecPerMinute = 1000 * 60;  
	var msecPerHour = msecPerMinute * 60;  
	var msecPerDay = msecPerHour * 24;  

	if (date2.getFullYear() == date.getFullYear())
	{
		var months = Math.abs(date2.getMonth() - date.getMonth());
		date.setMonth(date2.getMonth());
		
		if (date2 < date)  
		{  
			date.setMonth(date2.getMonth() - 1);
		    months--;
		}  
	}

	if (date2.getFullYear() > date.getFullYear())
	{
		var months = 12 - (date.getMonth() - date2.getMonth());
		date.setMonth(date2.getMonth());
		date.setFullYear(date2.getFullYear());
		if (date2 < date)  
		{  
			date.setMonth(date2.getMonth() - 1);
		    months--;
		}  
	}


	// Set a date and get the milliseconds    
	var dateMsec = date.getTime();  
	// Get the difference in milliseconds.  
	var interval = Math.abs(dateMsec - date2.getTime());  
	// Calculate how many days the interval contains. Subtract that  
	// many days from the interval to determine the remainder.  
	var days = Math.floor(interval / msecPerDay );  
	interval = interval - (days * msecPerDay );  

	// Calculate the hours, minutes, and seconds.  
	var hours = Math.floor(interval / msecPerHour );  
	interval = interval - (hours * msecPerHour );  

	var minutes = Math.floor(interval / msecPerMinute );  
	interval = interval - (minutes * msecPerMinute );  

	var seconds = Math.floor(interval / 1000 );  
	interval = interval - (seconds * 1000);

	var milliseconds = interval;
	milliseconds = ('000' + milliseconds).substr(-3);
	seconds = ('000' + seconds).substr(-2);
	minutes = ('000' + minutes).substr(-2);
	hours = ('000' + hours).substr(-2);
	days = ('000' + days).substr(-2);
	months = ('000' + months).substr(-2);
	years = ('000' + years).substr(-2);

	// Display the result.  
	document.getElementById("time").innerHTML = years + " " + " " + months + " " + days + " " + hours + " " + minutes + " " + seconds;  
	document.getElementById("description1").innerHTML = "Years Months Days";  
	document.getElementById("description2").innerHTML = "Hours Minutes Seconds"; 
}, 100);





var quotes = [
	"Until you value yourself, you won\'t value your time. Until you value your time, you will not do anything with it. ~ M. Scott Peck", 
	"The key is in not spending time, but in investing it. ~ Stephen R. Covey",
	"My favorite things in life don\'t cost any money. It\'s really clear that the most precious resource we all have is time. ~ Steve Jobs",
	"Know the true value of time; snatch, seize, and enjoy every moment of it. ~ Lord Chesterfield",
	"I recommend you take care of the minutes and the hours will take care of themselves. ~ Earl of Chesterfield",
	"Realize that now, in this moment of time, you are creating. You are creating your next moment. That is what\'s real. ~ Sara Paddison",
	"Ordinary people think merely of spending time. Great people think of using it. ~ Author Unknown",
	"Time is what we want most, but what we use worst. ~ William Penn",
	"Men talk of killing time, while time quietly kills them. ~ Dion Boucicault",
	"Dost thou love life? Then do not squander time, for that is the stuff life is made of. ~ Benjamin Franklin",
	"Time = Life, Therefore, waste your time and waste of your life, or master your time and master your life. ~ Alan Lakein",
	"Lost time is never found again. ~ Benjamin Franklin",
	"You can\'t make up for lost time. You can only do better in the future. ~ Ashley Ormon",
	"Lack of direction, not lack of time, is the problem. We all have twenty-four hour days. ~ Zig Ziglar",
	"You will never find time for anything. If you want time you must make it. ~ Charles Buxton",
	"The essence of self-discipline is to do the important thing rather than the urgent thing. ~ Barry Werner",
	"Don\'t wait. The time will never be just right. ~ Napoleon Hill",
	"Better three hours too soon than a minute too late. ~ William Shakespeare",
	"Determine never to be idle. No person will have occasion to complain of the want of time who never loses any. It is wonderful how much can be done if we are always doing. ~ Thomas Jefferson",
	"The best time to plant a tree is twenty years ago. The second best time is now. ~ Proverb",
	"One day at a time\-this is enough. Do not look back and grieve over the past for it is gone; and do not be troubled about the future, for it has not yet come. Live in the present, and make it so beautiful it will be worth remembering. ~ Unknown",
]


var randomNumber = Math.floor(Math.random()*(quotes.length));


document.getElementById("Quote").innerHTML = quotes[randomNumber];





