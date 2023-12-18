const ls = localStorage
const homeButton = document.querySelector('#home-button')
const message = document.querySelector('.message')
const currentUser = JSON.parse(ls.getItem('currentUser'))
const balance = document.querySelector('.balance-amount')
const buyButton = document.querySelector('#buy-button')
// TASK: CREATE FUNCTION FOR BUTTON REDIRECTS
homeButton.addEventListener('click', () => {
    window.location = '../dashboard/dashboard.html'
})

// TASK: DISPLAY BALANCE FOR CURRENT USER
balance.innerHTML = `$${currentUser.balance}`

// TASK: CREATE FUNCTION FOR ACTIVE TAB COLOR CHANGE
buyButton.style.color = 'white'