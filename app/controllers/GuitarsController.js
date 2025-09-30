import { AppState } from "../AppState.js"
import { guitarsService } from "../services/GuitarsService.js"
import { getFormData } from "../utils/FormHandler.js"


export class GuitarsController {

    constructor() {

        console.log("Guitars controller is loaded")
        AppState.on('guitars', this.drawGuitars)

        guitarsService.loadGuitars()


    }

    drawGuitars() {

        let guitarListingContent = ''
        AppState.guitars.forEach(guitar => {
            guitarListingContent += guitar.guitarListings
        })

        const guitarListingElem = document.getElementById('guitar-listings')
        guitarListingElem.innerHTML = guitarListingContent

    }

    submitGuitar() {

        event.preventDefault()
        let form = event.target

        console.log("Did it work?")

        const guitarData = getFormData(form)
        console.log("Guitar data from form", guitarData)

        guitarsService.createGuitar(guitarData)

        //@ts-ignore 
        form.reset()


    }

    deleteGuitar(guitarId) {

        const confirmed = window.confirm('Are you sure you want to delete this guitar?')

        if (!confirmed) {

            return
        }

        console.log('Deleting guitar with id of' + guitarId)

        guitarsService.deleteGuitar(guitarId)


    }

}
