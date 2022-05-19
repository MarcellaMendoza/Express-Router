const express = require('express')
const router = express.Router()


// ********* Move this code to 'routes.js'

let firstGuess = true
let carDoor = 0 // Car position from 0 (first door) to 2 (third door)


function SendObj(doorNum, carOrGoat) {
  const sendObj = {
  doorNum: doorNum,
  carOrGoat: carOrGoat
  }
  return sendObj
}

// Function to select the car's position randomly
function MakePos() {
    const rand = Math.random() * 3 // range is [0,3)
    if (rand <= 1) { 
      carDoor = 1
    } 
    else if (rand <= 2) {
      carDoor = 2
    } 
    else {
      carDoor = 3
    }
}

router.get('/1', (req, res) => { // The button for door 1 was pressed
  
  if (firstGuess === true) {
    firstGuess = false
    MakePos()
    
    if (carDoor === 1) { // If the car is behind door 1, randomly select door 2 or door 3 to open and show their goats
      const rand = Math.random()
      if (rand <= 0.5) {
        res.send(SendObj(2, "goat"))
      } 
      else {
        res.send(SendObj(3, "goat"))
      }
    }
    else if (carDoor === 2) { // If the car is behind door 2, show door 3's goat
      res.send(SendObj(3, "goat"))
    } 
    else { // The car is behind door 3, show door 2's goat
      res.send(SendObj(2, "goat"))
    }
  } 
  else { // Second guess
    if (carDoor === 1) { // Door 1 was final, correct guess
      res.send(SendObj(1, "car"))
    } 
    else { // Door 1 was final, incorrect guess
      res.send(SendObj(1, "goat"))
    }
  }
})



router.get('/2', (req, res) => { // The button for door 2 was pressed

  if (firstGuess === true) {
    firstGuess = false
    MakePos()
    
    if (carDoor === 2) { // If the car is behind door 2, randomly select door 1 or door 3 to open and show their goats
      const rand = Math.random()
      if (rand <= 0.5) {
        res.send(SendObj(1, "goat"))
      } 
      else {
        res.send(SendObj(3, "goat"))
      }
    }
    else if (carDoor === 1) { // If the car is behind door 1, show door 3's goat
      res.send(SendObj(3, "goat"))
    } 
    else { // The car is behind door 3, show door 1's goat
      res.send(SendObj(1, "goat"))
    }
  } 
  else { // Second guess
    if (carDoor === 2) { // Door 2 was final, correct guess
      res.send(SendObj(2, "car"))
    } 
    else { // Door 2 was final, incorrect guess
      res.send(SendObj(2, "goat"))
    }
  }
})



router.get('/3', (req, res) => {// The button for door 3 was pressed

  if (firstGuess === true) {
    firstGuess = false
    MakePos()
    
    if (carDoor === 3) { // If the car is behind door 3, randomly select door 1 or door 2 to open and show their goats
      const rand = Math.random()
      if (rand <= 0.5) {
        res.send(SendObj(1, "goat"))
      } 
      else {
        res.send(SendObj(2, "goat"))
      }
    }
    else if (carDoor === 1) { // If the car is behind door 1, show door 2's goat
      res.send(SendObj(2, "goat"))
    } 
    else { // The car is behind door 2, show door 1's goat
      res.send(SendObj(1, "goat"))
    }
  } 
  else { // Second guess
    if (carDoor === 3) { // Door 3 was final, correct guess
      res.send(SendObj(3, "car"))
    } 
    else { // Door 3 was final, incorrect guess
      res.send(SendObj(3, "goat"))
    }
  }
})



router.get('/reset', (req, res) => {
  firstGuess = true
  carDoor = 0
  res.sendStatus(200)
})


// ********* End of code to move
module.exports = router