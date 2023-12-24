

const backArrow = document.querySelector('.back-arrow-button')
backArrow.addEventListener('click', () => {
    window.location = '../AddFundsPage/addfundspage.html'
})

// TASK: CREATE FUNCTION FOR FOCUSED BUTTONS

// define button elements
const buttonAmounts = document.querySelectorAll('.button-amount')
// create selected button variable
let selectedButton
// create function to remove border from prev button
function removeBorderFromSelected() {
    if(selectedButton) {
        selectedButton.classList.remove('selected')
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
    })
   
})
