// define button elements
const buttonAmounts = document.querySelectorAll('.button-amount')
const depositAmountField = document.querySelector('#deposit-amount')
const backArrow = document.querySelector('.back-arrow-button')
const transactionText = document.querySelector('.transaction-text')
const depositButton = document.querySelector('.deposit-button')
const form = document.querySelector('form')
const balance = document.querySelector('.balance')
const ls = localStorage
const user = JSON.parse(ls.getItem('currentUser'))
const purchaseSound = document.querySelector('#purchase-sound')
const inputs = document.querySelectorAll('input')


backArrow.addEventListener('click', () => {
    window.location = '../AddFundsPage/addfundspage.html'
})

balance.textContent = `$${user.balance}`


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
    if (form.checkValidity()) {
       e.preventDefault()
        let amountToBeDeposited = selectedButton ? Number(selectedButton.getAttribute('data-amount')) : Number(depositAmountField.value.slice(1));
        let amountToBeDepositedToFixed = Number(amountToBeDeposited.toFixed(2));
        console.log(`The user wants: $${amountToBeDepositedToFixed} to be deposited to their account.`) 
    
        // TASK: CREATE FUNCTIONAITLY FOR ADDING DEPOSIT AMOUNT TO BALANCE
        console.log(`${user.username}'s balance is:`, user.balance) 
        // TASK: UPDATE LS VALUE TO NOW CURRENT VALUE
        const userObject = JSON.parse(ls.getItem('currentUser'))
        userObject.balance += amountToBeDepositedToFixed
        console.log(userObject.balance)
        // serialize the object so it can be store back in ls
        const updatedUser = JSON.stringify(userObject)
        ls.setItem('currentUser', updatedUser)
        console.log(ls.getItem('currentUser'))

        // TASK: UPDATE THE USER BALANCE INSIDE THE USER ARRAY
        // identify the current user
        const currentUserIdentifier = JSON.parse(ls.getItem('currentUser')).username

        // get the users array
        const usersString = ls.getItem('userArray')
        // parse the user array
        const usersStringToArray = JSON.parse(usersString)
        console.log(usersStringToArray)
        // find and update the user
        const userIndex = usersStringToArray.findIndex(user => user.username === currentUserIdentifier )
        if (userIndex !== -1) {
            Number(usersStringToArray[userIndex].balance += amountToBeDepositedToFixed).toFixed(2)
            console.log(usersStringToArray[userIndex].balance)
        }
        // serialize the updated array
        const updatedUserString = JSON.stringify(usersStringToArray)
        console.log(updatedUserString)
        // store the updated array
        ls.setItem('userArray', updatedUserString)
        console.log(user.balance)
        balance.textContent = `$${userObject.balance}`
        purchaseSound.play()
        resetFields()
    }
    
    
});


// TASK: CREATE FUNCTION TO RESET INPUT FIELDS AFTER DEPOSIT
const resetFields = () => {
    inputs.forEach((input) => {
        input.value = ''
    })
    transactionText.textContent = 'Please enter a valid deposit amount.'
}
