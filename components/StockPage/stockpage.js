const ls = localStorage
const homeButton = document.querySelector('#home-button')
const message = document.querySelector('.message')
const currentUser = JSON.parse(ls.getItem('currentUser'))
const balance = document.querySelector('.balance-amount')
const buyButton = document.querySelector('#buy-button')
const logoutButton = document.querySelector('#logout-button')
const logoutSound = document.querySelector('#logout-sound')
const loadingContainer = document.querySelector('.loading-container')
const main = document.querySelector('main');



// TASK: DISPLAY BALANCE FOR CURRENT USER
balance.innerHTML = `$${currentUser.balance}`

// Get Stock Info From Local Storage
const stockInfo = JSON.parse(ls.getItem('fetchedDataArray'))
console.log(stockInfo)


// Redirect to stock info when stock is clicked
export function displayStockInfo() {

    // Parse the query string
    document.addEventListener('DOMContentLoaded', () => {
        const params = new URLSearchParams(window.location.search);
        const stock = params.get('stock');

        if (stock) {
            // Update the DOM with the stock info
            const stockInfoHeader = document.querySelector('.message');
            stockInfoHeader.textContent = `${stock}`;
        }

        // add stock info to DOM

        const stockInfoSection = document.querySelector('.stock-info');
        const stockElement = document.querySelector('h1');
        const stockElementText = stockElement.textContent;

        // filter stock array by matching stockElementText on page
        const stockToDisplay = stockInfo.filter(item => item.symbol === stockElementText)
        console.log(stockToDisplay)

        // create text to put on page with filtered data
        const stockText = document.createElement('p');
        stockText.textContent = stockToDisplay[0].companyName;
        stockInfoSection.append(stockText)

        // create a html template using insertAdjacentHTML('afterend') instead of creating individual elements
    });


}

displayStockInfo();