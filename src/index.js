
// console.log("Hi")
document.addEventListener('DOMcontentLoaded', () => {
  console.log("The DOM is Loaded")
})


const flataDriversURL = 'https://mario-kart-tour-api.herokuapp.com/api/v1/drivers'

fetch(flataDriversURL)
.then(response => response.json())
.then(kartData => { 
  console.log(kartData[0].name)   

  const characterDetails = document.querySelector("#player-details")

    const marioName = kartData[0].name
    const peachName = kartData[1].name
    const daisyName = kartData[2].name

    const characterOne = document.querySelector("#character-1")
      characterOne.textContent = marioName
      characterDetails.append(characterOne)

      const characterTwo = document.querySelector("#character-2")
      characterTwo.textContent = peachName
      characterDetails.append(characterTwo)

      const characterThree = document.querySelector("#character-3")
      characterThree.textContent = daisyName
      characterDetails.append(characterThree)

});

// -- header mouseenter event
const headerSection = document.querySelector("#flata-header")

headerSection.addEventListener("mouseenter" , () => {
  console.log("It's work")  //
  headerSection.style.border = '5px dotted orange';

})


// -- submit event
const submitBtn = document.querySelector("#submit-button")

submitBtn.addEventListener("click", () => {
  console.log("click work!")
})
