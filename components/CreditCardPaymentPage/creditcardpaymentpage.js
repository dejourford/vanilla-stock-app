// define button elements
const buttonAmounts = document.querySelectorAll('.button-amount')
const depositAmountField = document.querySelector('#deposit-amount')
const backArrow = document.querySelector('.back-arrow-button')
const transactionText = document.querySelector('.transaction-text')
const depositButton = document.querySelector('.deposit-button')


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
    selectedButton = null
    depositAmountField.value = ''
    transactionText.textContent = 'Please enter a valid deposit amount.'
})

// TASK: CREATE FUNCTION TO VALIDATE USER INPUT FOR DEPOSIT AMOUNT

depositAmountField.addEventListener('input', () => {
    const valueToNum = Number(depositAmountField.value)

    if (isNaN(valueToNum)) {
        depositAmountField.value = ''
        
    }
})


// TASK: DISPLAY TRANSACTION MESSAGE IF INPUT FIELD HAS VALUE
depositAmountField.addEventListener('change', () => {
    const depositAmountFieldToNumber = Number(depositAmountField.value)
    depositAmountField.value = '$' + depositAmountFieldToNumber.toFixed(2)
    const currentValue = Number(depositAmountField.value.slice(1)).toFixed(2)
    transactionText.textContent = 'You will be charged'+ " " +'$'+ currentValue + " " + 'by Stock'
})





// TASK: CREATE FUNCTIONALITY FOR DEPOSIT BUTTON PRESS

depositButton.addEventListener('click', (e) => {
    e.preventDefault();
    const amountToBeDeposited = selectedButton ? Number(selectedButton.getAttribute('data-amount')) : Number(depositAmountField.value.slice(1));
    const amountToBeDepositedToFixed = Number(amountToBeDeposited.toFixed(2));
    console.log(`The user wants: $${amountToBeDepositedToFixed} to be deposited to their account.`)
});



