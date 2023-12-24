// define button elements
const buttonAmounts = document.querySelectorAll('.button-amount')
const depositAmountField = document.querySelector('#deposit-amount')
const backArrow = document.querySelector('.back-arrow-button')
const transactionText = document.querySelector('.transaction-text')

backArrow.addEventListener('click', () => {
    window.location = '../AddFundsPage/addfundspage.html'
})



// TASK: CREATE FUNCTION FOR FOCUSED BUTTONS
// create selected button variable
let selectedButton
// create function to remove border from prev button
function removeBorderFromSelected() {
    if(selectedButton) {
        selectedButton.classList.remove('selected')
        transactionText.textContent = ''
    }
}
// add click event listeners to buttons
buttonAmounts.forEach(button => {
    button.addEventListener('click', (e) => {
        const currentButton = e.target

         // remove border from prev button
        removeBorderFromSelected()
        // set border to newly clicked button
        currentButton.classList.add('selected')
        selectedButton = currentButton

        // TASK: CREATE FUNCTION FOR DISPLAYING A SELECTED AMOUNT
        // if an amount is selected, display it in the DOM
        const currentValue =  currentButton.getAttribute('data-amount')
        depositAmountField.value = '$' + currentValue

        // generate transaction message for button amount
        transactionText.textContent = `You will be charged $${currentValue} by Stock`
    })
   
})

// TASK: REMOVE BORDER FROM BUTTONS AND CLEAR INPUT FIELD
// IF IT IS CLICKED
depositAmountField.addEventListener('click', () => {
    removeBorderFromSelected()
    depositAmountField.value = '$'
})

// TASK: DISPLAY TRANSACTION MESSAGE IF INPUT FIELD HAS VALUE
depositAmountField.addEventListener('change', () => {
    const currentValue = depositAmountField.value
    transactionText.textContent = `You will be charged ${currentValue} by Stock`
})