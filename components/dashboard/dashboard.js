import stockList from "../../data.js"

const ls = localStorage
const currentUser = JSON.parse(ls.getItem('currentUser'))
const playButton =  document.querySelector('.play-button')
const pauseButton =  document.querySelector('.pause-button')
const backgroundMusic = document.querySelector('#backgroundMusic')
const buttonPressSound = document.querySelector('#button-press-sound')
const negativeSound = document.querySelector('#negative-sound')
const main = document.querySelector('main')
const header = document.querySelector('header')
const buyButton = document.querySelector('#buy-button')
const logoutButton = document.querySelector('#logout-button')
logoutButton.addEventListener('click', () => {
    window.location = '../../index.html'
})
// on windows load, set play button to hidden
playButton.style.display = 'none'

// on windows load, set the music volume
backgroundMusic.volume = 0.03

// button press audio sounds
negativeSound.volume = 0.3

// create a play sound function
function playSound(e) {
    console.log(e.target)
    if (e.target === logInButton) {
        buttonPressSound.play()
    }
}

// if user clicks button, peform that function
playButton.addEventListener('click', function() {
    backgroundMusic.play()
    playButton.style.display = 'none'
    pauseButton.style.display = 'flex'
})

pauseButton.addEventListener('click', function() {
    backgroundMusic.pause()
    pauseButton.style.display = 'none'
    playButton.style.display = 'flex'
    console.log('the music has been paused')
})

// MAIN DASHBOARD JS CONTENT

// display welcome message
const h1 = document.querySelector('h1')
h1.innerHTML = `Welcome, <br> ${capitalizeUsername(currentUser.username)}!`

// display balance amount
const balanceAmount = document.querySelector('.balance-amount')
balanceAmount.innerHTML = `$${currentUser.balance}`;

// TASK: CAPITALIZE FIRST LETTER OF USERNAME
function capitalizeUsername(name) {
    // receive username
   
    // grab first character of username
    // capitalize character
    const letter = name.at(0).toUpperCase()
    
    // add character back to name
    const updatedName = letter + name.slice(1)
    // return result
    return updatedName
}

// TASK: CREATE FUNCTION TO CLEAR DOM FOR BUY CONTENT
// WHEN BUTTON PRESSED

function showBuyContent() {
    main.innerHTML = ``
}

buyButton.addEventListener('click', () => {
    showBuyContent()
})


// TASK: USE STOCK API TO FETCH DATA FOR 30 EQUITIES
const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=7HII6Q8CVJIFKJPT`
// receive data
console.log(stockList)

// create variable and assign it to current data value
let currentStock
for (const item of stockList) {
    currentStock = item.title
    
    // create url fetch request to use variable as param
    
    // fetch(url)
    // .then(response => {
    //     if(!response.ok) {
    //         console.log('There was an error!')
    //     }
    //     return response.json()
    // })
    // .then(data => {
    //     console.log(data)
    // })
    // .catch(error => {
    //     console.error('There was a problem with the fetch operation:', error)
    // })
}
// use variable as url param
// store fetched data in new array
// move to next data value and repeat
// fetch(url)
//     .then(response => {
//         if(!response.ok) {
//             console.log('There was an error!')
//         }
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//         console.log(data['Meta Data']['2. Symbol'])
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error)
//     })