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

// TASK: CREATE MAP FUNCTION TO CREATE PROMISES FOR EACH STOCK
// const stockPromises = stockList.map(item => {
//     const apiKey = '7HII6Q8CVJIFKJPT';
//     const symbol = item
//     const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
    
//     return fetch(url)
//     .then(response => {
//         if (!response.ok) {
//             console.log('The network response was not okay!')
//         }
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//         const stockTitle = data['Meta Data']['2. Symbol']
//         const stockPrice = data['Time Series (Daily)'][formattedDate]['1. Open']
//         return {title: stockTitle, price: stockPrice}
//     })
//     .catch(error => {
//         console.log(`There was a problem with the fetch operation for ${symbol}:`, error)
//         return {title: symbol, price: 'N/A'}
//     })
// })

// Promise.all(stockPromises)
//     .then(stockData => {
//         console.log(stockData)

//         // store stock data array in local storage
//         ls.setItem('stockData', JSON.stringify(stockData))
//     })
//     .catch(error => {
//         console.log('Error fetching stock data:', error)
//     })


console.log(ls.getItem('currentUser'))