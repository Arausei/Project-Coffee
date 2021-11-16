document.addEventListener('DOMcontentLoaded', ()=> { console.log("The DOM is Loaded")
})
const flataDriversURL = 'https://mario-kart-tour-api.herokuapp.com/api/v1/drivers'
fetch(flataDriversURL)
.then(response => response.json())
.then(flataDriversFetch => {flataDriversFetch.forEach(d=> console.log(d) 
    
)   
 }
)
