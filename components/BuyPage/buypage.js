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
// TASK: CREATE FUNCTION FOR BUTTON REDIRECTS
homeButton.addEventListener('click', () => {
    window.location = '../dashboard/dashboard.html'
})

// button press audio sounds
logoutSound.volume = 0.3

// on windows load, set loading properties
loadingContainer.style.display = 'none';
main.style.display = 'flex';

// create event listener for logout button
logoutButton.addEventListener('click', () => {
  logoutSound.play()
  loadingContainer.style.display = 'flex';
    main.style.display = 'flex';
  setTimeout(() => {
    
    window.location = '../../index.html'
  }, 500)
  
})

// TASK: DISPLAY BALANCE FOR CURRENT USER
balance.innerHTML = `$${currentUser.balance}`

// TASK: CREATE FUNCTION FOR ACTIVE TAB COLOR CHANGE
buyButton.style.color = 'white'

// TASK: FETCH DATA FROM STOCK API TO DISPLAY EACH STOCK IN DOM
const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=7HII6Q8CVJIFKJPT`
// receive data
console.log(stockList)