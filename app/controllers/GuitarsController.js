import { AppState } from "../AppState.js"


export class GuitarsController {

    constructor() {

        console.log("Guitars controller is loaded")
        AppState.on('guitars', this.drawGuitars)
        this.drawGuitars()


    }

    drawGuitars() {

        let guitarListingContent = ''
        AppState.guitars.forEach(guitar => {
            guitarListingContent += guitar.guitarListings
        })

        const guitarListingElem = document.getElementById('guitar-listings')
        guitarListingElem.innerHTML = guitarListingContent

    }


}
