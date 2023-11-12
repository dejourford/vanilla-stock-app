// create new array for users
let users = []
let user
// create object for new user
class User {
    constructor(id, username, password, balance) {
        this.id = id, 
        this.username = username;
        this.password = password; 
        this.balance = balance;
    }

    getBalance() {
        return `${this.username}'s balance is ${this.balance}`
    }
}


// capture input value and store as variable on button press
const logInButton = document.querySelector('.log-in-button')
logInButton.addEventListener('click', function(e) {
    e.preventDefault()
    createNewUser()
    resetForm()
})

// create new user using captured values on button press
function createNewUser() {
    console.log('a new user has been created')
    let usernameInputValue = document.querySelector('.username-input-value').value
    let passwordInputValue = document.querySelector('.password-input-value').value
    let balance = 0
// push user object to users array
    user = new User(users.length + 1, usernameInputValue, passwordInputValue, balance)
    users.push(user)

    // display array
    console.log(users)

}

// clear inputs
function resetForm() {
    const form = document.querySelector('.input-section')
    form.reset()
}
