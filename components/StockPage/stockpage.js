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


// Redirect to stock info when stock is clicked
export function displayStockInfo(stock) {

    // add stock info to DOM
    
    // Parse the query string
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const stock = params.get('stock');

    if (stock) {
        // Update the DOM with the stock info
        const stockInfoHeader = document.querySelector('.message');
        stockInfoHeader.textContent = `${stock}`;
    }
});
    
    const stockInfoSection = document.querySelector('.stock-info');
    console.log(stockInfoSection)
    // stockInfoSection.insertAdjacentHTML('afterend', `
    //         <h1>Test</h1>
    //     `) 

        
}

displayStockInfo();