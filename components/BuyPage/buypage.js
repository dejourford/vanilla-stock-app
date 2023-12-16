const ls = localStorage
const homeButton = document.querySelector('#home-button')
const message = document.querySelector('.message')
const currentUser = JSON.parse(ls.getItem('currentUser'))
const balance = document.querySelector('.balance-amount')
// TASK: CREATE FUNCTION FOR BUTTON REDIRECTS
homeButton.addEventListener('click', () => {
    window.location = '../dashboard/dashboard.html'
})

// TASK: DISPLAY BALANCE FOR CURRENT USER
balance.innerHTML = `$${currentUser.balance}`