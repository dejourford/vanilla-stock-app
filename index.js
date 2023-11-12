// create new array for users
let users = []
let user
// create object for new user
function User (id,username,password, balance) {
    this.id = id,
    this.username = username,
    this.password = password,
    this.balance = balance,
    this.getBalance = function getBalance() {
        console.log(`${this.username} has a balance of ${this.balance}`)
    }
}
// capture input value and store as variable on button press
const logInButton = document.querySelector('.log-in-button')
logInButton.addEventListener('click', createNewUser)
// create new user using captured values on button press
function createNewUser() {
    console.log('a new user has been created')
    let usernameInputValue = document.querySelector('.username-input-value').value
    let passwordInputValue = document.querySelector('.password-input-value').value
    let balance = 0
// push user object to users array
    user = new User(users.length + 1, usernameInputValue, passwordInputValue, balance)
    users.push(user)
    console.log(users)
}

// display updated array
function updateArray(users) {
    console.log(users)
    users = users
}

