const ls = localStorage
const message = document.querySelector('.message')
const currentUser = JSON.parse(ls.getItem('currentUser'))
const balance = document.querySelector('.balance-amount')
const sellButton = document.querySelector('#sell-button')





// TASK: DISPLAY BALANCE FOR CURRENT USER
balance.innerHTML = `$${currentUser.balance}`

// TASK: CREATE FUNCTION FOR ACTIVE TAB COLOR CHANGE
sellButton.style.color = 'white'