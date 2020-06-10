# TrueTime
The original purpose was to track the time spent on a user-set list of websites to inform the user on their time allocation and productivity habits. Over time, the magnitude of the project grew as I introduced more functionality, including a new tab page and user options. The intention is to help boost productivity by placing time into perspective. 

Getting Started
-------- 
To install, download the repository to your computer. Go to your Google Chrome Extensions page, enable developer mode in the upper right hand corner and load the downloaded folder containing the extension!

Functionality
-------- 
The extension has two main components. The first is the new tab page. In options, a user can set a specific date, either before the current date or after. The new tab page displays in the center the total time between that date and the current date. Some usage examples include countdown from an upcoming deadline or your current age. The background of circles is meant as a visualization for the time remaining. All the colors and gradients can be set under options by providing hue, saturation, starting lightness, and ending lightness values. All the defaults can be restored.

The other component is the popup in the extension bar. In options, the user can add and remove websites they would like tracked. The current list is also displayed. The extensions starts tracking whenever the primary window is on one of those websites. The aggregated data is then displayed in the popup, which has options for the past week and past month. Anytime the user would like to reset, they can do so in options. 

Contribute
--------
Clone the repo, make any changes, test and send a pull request. 

One aspect of functionality I haven't yet worked out is having the counter stop when a user switches their active browser window from a website on their user list to a new tab. In other cases, the counter works fine and stops when the new window or tab is a website not on the list. 

Report Issues
--------
If you run into any problems with this extension, write in the Issues for this repo.

