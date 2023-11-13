// create local storage variable
let ls = localStorage

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

let users = getLocalStorage('userArray')

// TASK: CREATE FUNCTION TO ADD USER ARRAY TO LOCAL STORAGE
function addUserToLocalStorage(users) {
    // TASK: ADD USERS ARRAY TO LOCAL STORAGE
    // convert array to a JSON string
    const arrayString = JSON.stringify(users)
    console.log(users)
    console.log(`The array string is ${arrayString}`)
    // add JSON string to local storage
    ls.setItem('userArray', arrayString)
    console.log(ls)
}

// create user variable
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
    addUserToLocalStorage(users)
    resetForm()
})

// create new user using captured values on button press
function createNewUser() {
    console.log('a new user has been created')
    let usernameInputValue = document.querySelector('.username-input-value').value
    let passwordInputValue = document.querySelector('.password-input-value').value
    let balance = 100
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

