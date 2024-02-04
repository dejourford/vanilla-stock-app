import stockList from "../../data.js"

const ls = localStorage
const homeButton = document.querySelector('#home-button')
const message = document.querySelector('.message')
const currentUser = JSON.parse(ls.getItem('currentUser'))
const balance = document.querySelector('.balance-amount')
const buyButton = document.querySelector('#buy-button')
const logoutButton = document.querySelector('#logout-button')
const logoutSound = document.querySelector('#logout-sound')
const loadingContainer = document.querySelector('.loading-container')
const main = document.querySelector('main')




// TASK: DISPLAY BALANCE FOR CURRENT USER
balance.innerHTML = `$${currentUser.balance}`

// TASK: CREATE FUNCTION FOR ACTIVE TAB COLOR CHANGE
buyButton.style.color = 'white'


// TASK: GET TODAY'S DATE
// Create a new Date object (which by default contains the current date and time)
const today = new Date();

// Get today's date components
const year = today.getFullYear(); // Get the year (e.g., 2023)
const month = today.getMonth() + 1; // Get the month (months are zero-indexed, so add 1)
const day = today.getDate(); // Get the day of the month

// Format the date as 'YYYY-MM-DD' (e.g., '2023-12-21')
const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

console.log('Today\'s date:', formattedDate);

// TASK: CREATE FUNCTION TO FETCH DATA FOR EACH API IN DATA FILE
const apiKey = 'a3b54a587899405eb8740b2d7f8742d1'
const url = `https://financialmodelingprep.com/api/v3/profile/AAL?apikey=${apiKey}`

fetch(url)
.then (response => {
    if (!response) {
        console.log('error!')
    }
    return response.json()
})
    
.then (data => {
    console.log(data[0].price)    
})


