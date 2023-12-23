const ls = localStorage
const homeButton = document.querySelector('#home-button')
const message = document.querySelector('.message')
const currentUser = JSON.parse(ls.getItem('currentUser'))
const balance = document.querySelector('.balance-amount')
const addFundsButton = document.querySelector('#deposit-button')
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
main.style.display = 'block';

// create event listener for logout button
logoutButton.addEventListener('click', () => {
  logoutSound.play()
  loadingContainer.style.display = 'flex';
    main.style.display = 'block';
  setTimeout(() => {
    
    window.location = '../../index.html'
  }, 500)
  
})

// TASK: DISPLAY BALANCE FOR CURRENT USER
balance.innerHTML = `$${currentUser.balance}`

// TASK: CREATE FUNCTION FOR ACTIVE TAB COLOR CHANGE
addFundsButton.style.color = 'white'

// TASK: CREATE FUNCTION TO REDIRECT TO NECESSARY PAYMENT PAGE DEPENDING ON USER CLICK

// capture the click events
const creditCardPaymentMethod = document.querySelector('#debit')
creditCardPaymentMethod.addEventListener('click', () => {
  window.location = '../CreditCardPaymentPage/creditcardpaymentpage.html'
})

const payPalPaymentMethod = document.querySelector('#paypal')
payPalPaymentMethod.addEventListener('click', () => {
  window.location = '../PaypalPaymentPage/paypalpaymentpage.html'
})

const applePayPaymentMethod = document.querySelector('#apple-pay')
applePayPaymentMethod.addEventListener('click', () => {
  window.location = '../ApplepayPaymentPage/applepaypaymentpage.html'
})

