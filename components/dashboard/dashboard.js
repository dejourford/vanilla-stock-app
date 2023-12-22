import stockList from "../../data.js"

// Access the canvas element

const canvas = document.getElementById('myChart')
canvas.height = '150'

const ctx = canvas.getContext('2d')
// Create the chart
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: '',
      data: [10, 20, 15, 25, 30],
      borderColor: 'green',
      borderWidth: 3,
      pointStyle: false,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        display: false,
        ticksDisplay: false,
        borderColor: 'pink'
      },
      
      x: {
        display: false,
        borderColor: 'pink'
      },
    },
    plugins: {
        legend: {
            display: false
        }
    },
    maintainAspectRatio: true,
    responsive: true
  }
});



const ls = localStorage
const currentUser = JSON.parse(ls.getItem('currentUser'))
const logoutSound = document.querySelector('#logout-sound')
const main = document.querySelector('main')
const buyButton = document.querySelector('#buy-button')
const logoutButton = document.querySelector('#logout-button')
const loadingContainer = document.querySelector('.loading-container')
const homeButton = document.querySelector('#home-button')
// button press audio sounds
logoutSound.volume = 0.3

// on windows load, set loading properties
loadingContainer.style.display = 'none';
main.style.display = 'flex';

// create event listener for logout button
logoutButton.addEventListener('click', () => {
  logoutSound.play()
  loadingContainer.style.display = 'flex';
    main.style.display = 'flex';
  setTimeout(() => {
    
    window.location = '../../index.html'
  }, 500)
  
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

// TASK: CREATE FUNCTION FOR ACTIVE TAB COLOR CHANGE
homeButton.style.color ='white'


// TASK: CREATE FUNCTION FOR PAGE REDIRECTS ON BUTTON PRESS

function showBuyContent() {
    window.location = '../BuyPage/buypage.html'
}

buyButton.addEventListener('click', () => {
    showBuyContent()
})



