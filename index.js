let ls = localStorage
let usernameInputValue
let passwordInputValue
let attemptedUsername
let attemptedPassword
let balance = 100
let users = getLocalStorage('userArray')
const createNewAccountButton = document.createElement('button')
const inputSection = document.querySelector('.input-section')
const logInButton = document.querySelector('.log-in-button')

// TASK: CREATE FUNCTION TO GET USER ARRAY FROM LOCAL STORAGE
function getLocalStorage(userArray) {
    // get value of local storage
    const retreivedArrayString = ls.getItem(userArray)
    
    // check if retrieved value is null
    if (retreivedArrayString === null) {
        console.log('No data found in local storage for this key')
        return []
    }
    
    // change value to JSON object
    const retreivedArray = JSON.parse(retreivedArrayString)
    console.log(retreivedArray)
    return retreivedArray
}


// TASK: CREATE FUNCTION TO ADD USER ARRAY TO LOCAL STORAGE
function addUserToLocalStorage(users) {
    // push user object to users array
    let newUser = new User(users.length + 1, usernameInputValue, passwordInputValue, balance)
    users.push(newUser)

    // display array
    console.log(users)
    
    // TASK: ADD USERS ARRAY TO LOCAL STORAGE
    // convert array to a JSON string
    const arrayString = JSON.stringify(users)
    console.log(users)
    console.log(`The array string is ${arrayString}`)
    // add JSON string to local storage
    ls.setItem('userArray', arrayString)
    
    users =  getLocalStorage('userArray')
    
    console.log(ls.getItem('userArray'))

    
}


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


// create new user using captured values on button press
// let users = getLocalStorage('userArray')
let user;

function createNewUser() {
    console.log('a new user has been created')
     usernameInputValue = document.querySelector('.username-input-value').value
     passwordInputValue = document.querySelector('.password-input-value').value
    // let balance = 100
    
}

// clear inputs
function resetForm() {
    const form = document.querySelector('.input-section')
    form.reset()
}


// TASK: IF USER SIGN IS NOT ALREADY IN LOCAL STORAGE, THEN 
// THEY MUST CREATE A NEW ACCOUNT. THE CREATE NEW ACCOUNT 
// BUTTON SHOULD APPEAR IN THE DOM AFTER NO USER FOUND.
// IF USER IS FOUND, THEN CONSOLE LOG SUCCESS MESSAGE.


function validateUser() {
    
    // grab inputted values from sign-in attempt
    console.log(`${usernameInputValue} is trying to sign in with the password: ${passwordInputValue}`)
    attemptedUsername = usernameInputValue
    attemptedPassword = passwordInputValue
    console.log(attemptedUsername, attemptedPassword)
    // compare values to users in local storage.
    if (users.length === 0) {
        makeCreateAccountButton()
        console.log('no users here')
    }
    for (let i = 0; i < users.length; i++) {
        
        
        // if user in local storage, log 'success'
        console.log(users)
        // if (users.length === 0) {
        //     makeCreateAccountButton()
        //     console.log('no users here')
        // }
        

        
        const loginSucessful = 
        attemptedUsername === users[i].username && 
        attemptedPassword === users[i].password

        return loginSucessful 
        
        
    }

    

}
// create function to generate a create account button
// when no created user is found in local storage
function makeCreateAccountButton() {
    logInButton.textContent = 'Create New Account'
    generateErrorMessage()
}

// create function to display error message
function generateErrorMessage() {
    const message = document.querySelector('#message')
    message.textContent = 
    `No user was found with this username or password. 
    Please create a new account.
    `
}

// create function to reset page after successful login
function resetPage() {
    message.textContent = 'Log In to Stock'
    logInButton.textContent = 'Log In'
    resetForm()
}

// capture input value and store as variable on button press
logInButton.addEventListener('click', function(e) {
    debugger
    // when user clicks login, use that info to create a new user
    e.preventDefault()
    createNewUser()
    // using the new user, compare it against the users in the local storage array
    validateUser()
    // if there is no user, then push the new user to the local storage array
    validateUser ? console.log('user has been logged in') : makeCreateAccountButton()
    // if there is already a user in ls array, then generate button and message content to create a new user
    // when button is clicked, add new user to local storage array
    
    
    
    
    // if (message.textContent != 'Log In to Stock' && logInButton.textContent == 'Create New Account') {
    //     validateUser()
    //     addUserToLocalStorage(users)
        
    //     resetPage()
    // }
    
    
})