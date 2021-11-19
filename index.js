const flataDriversURL = 'https://mario-kart-tour-api.herokuapp.com/api/v1/drivers'
const characterDetails = document.querySelector("#player-details")
const characterOne = document.querySelector("#character-1")
const characterTwo = document.querySelector("#character-2")
const characterThree = document.querySelector("#character-3")
const submitBtn = document.querySelector("#submit-button")

document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM is ready to play!")

  fetch(flataDriversURL)
    .then(response => response.json())
    .then(kartData => {
      // console.log(kartData)  // gives the array of all objects
      kartData.forEach(character => {
        // console.log(character.name)  // gives all names

        if (character.position === 1) {
          const marioName = character.name
          const marioSpecialSkill = character.special_skill
          const marioTour = character.debut_tour

          const characterOne = document.querySelector("#character-1")

          const divLiListOne = document.createElement("p")
          const divLiListTwo = document.createElement("p")
          const divLiListThree = document.createElement("p")

          divLiListOne.textContent = marioName
          divLiListTwo.textContent = `Special Skill: ${marioSpecialSkill}`
          divLiListThree.textContent = `Tour: ${marioTour}`

          characterOne.append(divLiListOne, divLiListTwo, divLiListThree)
        }
        else if (character.position === 2) {
          const peachName = character.name
          const peachSpecialSkill = character.special_skill
          const peachTour = character.debut_tour

          const characterTwo = document.querySelector("#character-2")

          const divLiListOneForPeach = document.createElement("p")
          const divLiListTwoForPeach = document.createElement("p")
          const divLiListThreeForPeach = document.createElement("p")

          divLiListOneForPeach.textContent = peachName
          divLiListTwoForPeach.textContent = `Special Skill: ${peachSpecialSkill}`
          divLiListThreeForPeach.textContent = `Tour: ${peachTour}`

          characterTwo.append(divLiListOneForPeach, divLiListTwoForPeach, divLiListThreeForPeach)
        }
        else if (character.position === 3) {
          const daisyName = character.name
          const daisySpecialSkill = character.special_skill
          const daisyTour = character.debut_tour

          const characterThree = document.querySelector("#character-3")

          const divLiListOneForDaisy = document.createElement("p")
          const divLiListTwoForDaisy = document.createElement("p")
          const divLiListThreeForDaisy = document.createElement("p")

          divLiListOneForDaisy.textContent = daisyName
          divLiListTwoForDaisy.textContent = `Special Skill: ${daisySpecialSkill}`
          divLiListThreeForDaisy.textContent = `Tour: ${daisyTour}`

          characterThree.append(divLiListOneForDaisy, divLiListTwoForDaisy, divLiListThreeForDaisy)
        }
      });

      // -- header mouseenter event
      const headerSection = document.querySelector("#flata-header")

      headerSection.addEventListener("mouseenter", () => {
        // console.log("Mouse cursor detected!") 
        headerSection.style.border = '5px dotted orange';
      })

      headerSection.addEventListener("mouseleave", () => {
        // console.log("Mouse cursor has left!") 
        headerSection.style.border = '5px dotted blue';
      })
    })

  submitBtn.addEventListener("click", () => {
    // console.log("click work!")
    alert("Yiiiiiipeee! Let's-a go! 🏁 🏎️ 🏎️ 🏎️ 🏁");
  })
})
