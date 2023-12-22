
const logoutSound = document.querySelector('#logout-sound')
const main = document.querySelector('main')
const buyButton = document.querySelector('#buy-button')
const sellButton = document.querySelector('#sell-button')
const depositButton = document.querySelector('#deposit-button')
const logoutButton = document.querySelector('#logout-button')
const loadingContainer = document.querySelector('.loading-container')
const homeButton = document.querySelector('#home-button')
// button press audio sounds
logoutSound.volume = 0.3

// on windows load, set loading properties
loadingContainer.style.display = 'none';
main.style.display = 'flex';

// TASK: CREATE FUNCTION FOR PAGE REDIRECTS ON BUTTON PRESS
homeButton.addEventListener('click', () => {
  window.location = '../dashboard/dashboard.html'
})


buyButton.addEventListener('click', () => {
    window.location = '../BuyPage/buypage.html'
  })
  
  
  logoutButton.addEventListener('click', () => {
    logoutSound.play()
    loadingContainer.style.display = 'flex';
      main.style.display = 'flex';
    setTimeout(() => {
      
      window.location = '../../index.html'
    }, 500)
    
  })
  
  sellButton.addEventListener('click', () => {
    window.location = '../SellPage/sellpage.html'
  })
  
  depositButton.addEventListener('click', () => {
    window.location = '../AddFundsPage/addfundspage.html'
  })

