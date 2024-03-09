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
// const url = `https://financialmodelingprep.com/api/v3/profile/aapl?apikey=${apiKey}`


// TASK: GET STOCK LIST FROM DATA FILE
// AND CREATE A FETCH REQUEST FOR EACH STOCK
// CONSOLE LOG THE DATA

// console log stock list from data file
console.log(stockList)

// sort stock list alphabetically
const sortedStockData = stockList.sort((a,b) => a.localeCompare(b))
console.log(sortedStockData)


// TASK: CHECK LS FOR 'fetchedDataArray' AND IF FOUND,
// DO NOTHING. IF NOT FOUND, THEN FETCH DATA.

if (ls.getItem('fetchedDataArray').length === 0) {
    // create empty array for fetched data to go into 
    let fetchedDataArray = []
    console.log('items not found')
    // create for each function for each stock at its position
    
    sortedStockData.forEach((stock) => {
        fetchStockData(stock, apiKey)
        })
}
else {
    console.log('items found.')
    
    
}





// create a function for fetching stock data from api
function fetchStockData(stock, apiKey) {
    const url = (`https://financialmodelingprep.com/api/v3/profile/${stock}?apikey=${apiKey}`)

    // create fetch request for each stock using the url
    fetch(url)
        .then(response => {
            if (!response) {
                console.log('error!')
            }
            return response.json()
        })

        .then(data => {            
            // push fetched data to array
            fetchedDataArray.push(data[0])
            console.log(fetchedDataArray)
            // TASK: STORE RESULTING ARRAY TO LOCAL STORAGE
            // convert resulting array to string and store in ls
            ls.setItem('fetchedDataArray', JSON.stringify(fetchedDataArray))
        })

}








// TASK: CONSOLE LOG FETCHED DATA ARRAY IN LOCAL STORAGE
// get fetched data array from local storage and parse
// console log parsed data
const fetchedDataStringFromLocalStorage = ls.getItem('fetchedDataArray')
const fetchedDataStringFromLocalStorageToArray = JSON.parse(fetchedDataStringFromLocalStorage)
console.log(fetchedDataStringFromLocalStorageToArray)

// TASK: SORT FETCHED ARRAY ALPHABETICALLY BY SYMBOL
fetchedDataStringFromLocalStorageToArray.sort((a,b) => a.symbol.localeCompare(b.symbol))
// console log sorted array
console.log(fetchedDataStringFromLocalStorageToArray)
    
// display spinning wheel until set timeout function
loadingContainer.style.display = 'flex';
// TASK: CREATE FOR EACH FUNCTION TO MAKE CARDS FOR EACH STOCK
setTimeout(() => fetchedDataStringFromLocalStorageToArray.forEach(item => {
    // hide spinning wheel animation after 2-3 seconds
     loadingContainer.style.display = 'none'   
          
    
    
    console.log(item)
    // create card container
    const card = document.createElement('div')
    card.classList = 'card'
    
    // create a card left side
    const cardLeft = document.createElement('div')
    cardLeft.classList = 'card-left'

    // create card subtitle
    const cardTitle = document.createElement('h3')
    cardTitle.classList = 'card-title'
    cardTitle.textContent = item.companyName

    
    // create card title
    const cardSubTitle = document.createElement('p')
    cardSubTitle.classList = 'card-sub-title'
    cardSubTitle.textContent = item.symbol


    // // create card price
    // const cardPrice = document.createElement('p')
    // cardPrice.classList = 'card-price'
    // cardPrice.textContent = item.price
    // append all elements to card

    // create card right side
    const cardRight = document.createElement('div')
    cardRight.classList = 'card-right'

    // create card buy money symbol
    const moneySymbol = document.createElement('div')
    moneySymbol.classList = 'money-symbol'
    moneySymbol.textContent = '$'


    // append card title and sub title to card left
    cardLeft.append(cardTitle, cardSubTitle)


    // append money symbol to card right
    cardRight.append(moneySymbol)

    // append card left and card right to card
    card.append(cardLeft, cardRight)


    // append card to DOM
    const main = document.querySelector('main')
    
    main.append(card)
}), 1200)


