function handleImageAfterFetch(doorNum, carOrGoat) {

      if (carOrGoat === "car") { // Make door a car
    document.getElementById("door" + doorNum).style.background = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Mercedes_F1_car_01.jpg/640px-Mercedes_F1_car_01.jpg") no-repeat`
        document.getElementById("door" + doorNum).style.backgroundSize = '100% 100%'
    } 
    else { // Make door a goat
    document.getElementById("door" + doorNum).style.background = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/20130711_Goat_IMG_7911.png/640px-20130711_Goat_IMG_7911.png") no-repeat`
      document.getElementById("door" + doorNum).style.backgroundSize = '100% 100%'
    }
}


async function Door1Clicked() {
  const res = await fetch('/doors/1')
  const json = await res.json()
  const door = json.doorNum
  const carGoat = json.carOrGoat
  
  handleImageAfterFetch(door, carGoat)
}

async function Door2Clicked() {
  const res = await fetch('/doors/2')
  const json = await res.json()
  const door = json.doorNum
  const carGoat = json.carOrGoat
  
  handleImageAfterFetch(door, carGoat)
}

async function Door3Clicked() {
  const res = await fetch('/doors/3')
  const json = await res.json()
  const door = json.doorNum
  const carGoat = json.carOrGoat
  
  handleImageAfterFetch(door, carGoat)
}

async function ResetClicked() {

  for (let i=1; i<4; i++) {
        document.getElementById("door" + i.toString()).style.background = `url("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Door-liftarn-Door-white-stroke.svg/640px-Door-liftarn-Door-white-stroke.svg.png") no-repeat`
    document.getElementById("door" + i.toString()).style.backgroundSize = '100% 100%'
  }
    await fetch('/doors/reset')
}