import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";

export class HousesController {

    constructor() {

        console.log("Houses controller is loaded")
        AppState.on('houses', this.drawHouses)
        housesService.loadHouses()



        // this.drawHouses() no longer needed, loadHouses triggers observer

    }


    drawHouses() {

        let houseListingContent = ''
        AppState.houses.forEach(house => {
            houseListingContent += house.houseListings
        })

        const houseListingElem = document.getElementById('house-listings')
        houseListingElem.innerHTML = houseListingContent

    }

    submitHouse() {

        event.preventDefault()
        let form = event.target

        console.log('the house-year')

        const houseData = getFormData(form)

        console.log('house data from form', houseData)


        housesService.createHouse(houseData)
        //@ts-ignore
        form.reset()



    }

    deleteHouse(houseId) {

        const confirmed = window.confirm('Are you sure you want to delete this house?')

        if (!confirmed) {
            return
        }

        console.log('deleting car with id of ' + houseId)

        housesService.deleteHouse(houseId)


    }
}

