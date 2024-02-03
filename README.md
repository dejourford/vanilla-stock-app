<h1>Stock</h1>
<p>This is a gamified stock app that is currently under production. The goal is to create an application that allows users to buy, sell, and view stocks.</p>
<p>Link To Project: <a href="https://dejourstockapp.netlify.app">Stock App</a> </p>

<h2>How It's Made</h2>
<p>Tech used: HTML, CSS, JavaScript</p>
<p>The only colors being used in the application are red, lime green, white, and gray. These colors will keep the 
application simple and still familiar with users. Red will be used for decline in stock price or insufficent funds, 
lime green for increase in stock or money values, white for text within the app, and gray for icons. 
There is a login-screen upon app load. If the user information in the input fields are not found in local storage
then the user is prompted with a message in the DOM that there is no user found and a new account must be created.
After the new account is created, it is added to local storage. If the user is already in local storage, then they
are logged in and redirected to the user dashboard. From the dashboard, the user can buy, sell, and view stocks. 
The Vantage Stock API was utilized to get data from specific stocks. Only 24 stocks were chosen to minimize complexity. 
There is also a line chart displayed on the dashboard. ChartJS is what was used for the chart. 
</p>

<h2>Optimizations</h2>
<ul>
<li>Removed background music from app to limit complexity of music picking up where left off when navigating through app</li>
<li>Removed buttons on mobile screen and added icons at bottom of screen instead to add more real estate for the chart</li>
<li>Added sound effects to login and logout button presses to create a gamified experience</li>
<li>Added a 1px solid border around the button amounts when pressed to increase user experience</li>
<li>added limit of 9 characters to deposit input field to prevent user from entering values too large</li>
<li>implemented input validation to prevent user from entering letters instead of numbers inside input field</li>
<li>added a cash register sound effect for successful money deposit transaction</li>
<li>added a min-width value to the add funds screen to help with mobile responsiveness</li>
</ul>

<h2>Lessons Learned</h2>
<ul>
<li>Giving a designated width to a container can cause content to overflow</li>
<li>Background music in an app needs to be tracked somehow to maintain position while navigating through app</li>
<li>An event listener is needed for the "Enter" key to submit form data</li>
<li>Chart options such as responsiveness and keep-aspect-ratio are useful for charts</li>
<li>Input fields need to have a font size of at least 1rem or 16px to avoid the mobile zoom effect when focused</li>
<li>Labels for input fields can be used to show the user which field it's dedicated to</li>
<li>Using the "change" property in event listeners is how you can track state changes of inputs</li>
<li>updated data needs to be set to local storage to override the previous data</li>
<li>utilize min-width values to prevent overflowing as smaller screen sizes</li>
</ul>