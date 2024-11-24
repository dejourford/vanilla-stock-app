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

// create empty array for fetched data to go into 
let fetchedDataArray = []




// TASK: CREATE FOR EACH FUNCTION TO MAKE CARDS FOR EACH STOCK
async function fetchAndDisplayStocks() {
    // Check if 'fetchedDataArray' exists in local storage
    let fetchedDataStringFromLocalStorage = ls.getItem('fetchedDataArray');
    let fetchedDataArray = fetchedDataStringFromLocalStorage ? JSON.parse(fetchedDataStringFromLocalStorage) : null;

    if (!fetchedDataArray || fetchedDataArray === 'null') {
        console.log('Items not found, fetching new data.');
        fetchedDataArray = [];

        // Fetch data for each stock
        for (const stock of sortedStockData) {
            const url = `https://financialmodelingprep.com/api/v3/profile/${stock}?apikey=${apiKey}`;
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`Error fetching data for ${stock}`);
                const data = await response.json();
                fetchedDataArray.push(data[0]); // Add the stock data to the array
            } catch (error) {
                console.error(`Failed to fetch data for ${stock}:`, error);
            }
        }

        // Store fetched data in local storage
        ls.setItem('fetchedDataArray', JSON.stringify(fetchedDataArray));
    } else {
        console.log('Items found in local storage.');
    }

    // Sort fetched array alphabetically by symbol
    fetchedDataArray.sort((a, b) => a.symbol.localeCompare(b.symbol));

    // Display fetched data
    displayStockCards(fetchedDataArray);
}

// Function to display stock cards
function displayStockCards(stocks) {
    loadingContainer.style.display = 'none'; // Hide loading spinner

    stocks.forEach(item => {
        console.log(item);

        // Create card container
        const card = document.createElement('div');
        card.classList = 'card';
        card.id = item.symbol;

        // Create a card left side
        const cardLeft = document.createElement('div');
        cardLeft.classList = 'card-left';

        // Create card subtitle
        const cardTitle = document.createElement('h3');
        cardTitle.classList = 'card-title';
        cardTitle.textContent = item.companyName;

        // Create card title
        const cardSubTitle = document.createElement('p');
        cardSubTitle.classList = 'card-sub-title';
        cardSubTitle.textContent = item.symbol;

        // Create card right side
        const cardRight = document.createElement('div');
        cardRight.classList = 'card-right';

        // Create card buy money symbol
        const moneySymbol = document.createElement('div');
        moneySymbol.classList = 'money-symbol';
        moneySymbol.textContent = '$';

        // Append card title and sub title to card left
        cardLeft.append(cardTitle, cardSubTitle);

        // Append money symbol to card right
        cardRight.append(moneySymbol);

        // Append card left and card right to card
        card.append(cardLeft, cardRight);

        // Append card to DOM
        main.append(card);
    });

    // Add click event listeners to each card
    const stockItems = document.querySelectorAll('.card');
    stockItems.forEach(item => {
        item.addEventListener('click', function () {
            console.log(item);
        });
    });
}

// Call the main function
loadingContainer.style.display = 'flex'; // Show loading spinner while data is being fetched
fetchAndDisplayStocks();







