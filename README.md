# TrueTime
The inspiration for this was to create a chrome extension that tracks both the total and percentage of time spent on a certain list of websites that the user can set, to inform the user on their time allocation and productivity habits. That idea expanded and the magnitude of the project grew as I introduced more functionality, including a new tab page and user options. The intention is to help boost productivity by placing time into perspective. 

Getting Started
-------- 
To install this extension in chrome, download it to your computer. On your chrome extensions page, enable developer mode in the upper right hand corner and click on load unpacked on the top bar. Finally, select the folder containing the extension!

Functionality
-------- 
The extension has two main components. The first is the new tab page. In options, a user can set a specific date, either before the current date or after. The new tab page displays in the center the total time between that date and the current date. This can be used in a number of ways; I envisioned it originally to be used for deadlines in the future, but it can also be used to measure the time elapsed from a particular moment in the past, such as your birthdate thus displaying your precise current age. 

As a part of this functionality, the background of circles is meant as a visualization for the time remaining. If the date entered is in the future, the fraction of circles colored is the time passed since the date was entered divided by the total time from the moment the date was entered to the entered date. It colors in from top to bottom, and is meant to give an idea of the fraction of time that has elapsed. If the date entered is in the past, the date is assumed to be a birthday and the fraction is then the time elapsed divided by 100 years. The background color can be set in options, as well as the color gradients for the time passed and time left. The color gradient option boxes have 4 comma separated values for hue, saturation, starting lightness, and ending lightness, the last two values of which provide the gradient effect. Notice for all the options defaults can be restored, and if the user would like to change them the formatting should be preserved.

The other component is the popup in the extension bar. In options the user can add and remove websites they would like tracked, and the current list of websites they have is also displayed. Anytime their primary window is on one of the websites in the list, the extension keeps track of that time and what percentage that is of the total time the user spends on chrome. This information is then displayed in the popup, which has options for the past week and past month. Anytime the user would like to reset this back to 0 and start over, they can do so in options. 

Contribute
--------
Clone the repo, make any changes, test and send a pull request. 

One aspect of functionality I haven't yet worked out is having the counter stop when a user switches their active browser window from a website on their user list to a new tab. In other cases, the counter works fine and stops when the new window or tab is a website not on the list. 

Report Issues
--------
If you run into any problems with this extension, write in the Issues for this repo.

