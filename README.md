<h1>Stock</h1>
<p>This is a gamified stock app that is currently under production. The goal is to create an application that allows users to buy, sell, and view stocks.</p>
<p>Link To Project:</p> <a href="https://dejourstockapp.netlify.app">Stock App</a>

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
</ul>

<h2>Lessons Learned</h2>
<ul>
<li>Giving a designated width to a container can cause content to overflow</li>
<li>Background music in an app needs to be tracked somehow to maintain position while navigating through app</li>
<li>An event listener is needed for the "Enter" key to submit form data</li>
<li>Chart options such as responsiveness and keep-aspect-ratio are useful for charts</li>
</ul>