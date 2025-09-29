import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { loadState, saveState } from "../utils/Store.js"


class HousesService {

    deleteHouse(houseId) {
        const houseIndex = AppState.houses.findIndex(house => house.id == houseId)
        console.log('house', houseIndex);

        AppState.houses.splice(houseIndex, 1)
        this.saveHouses()

    }



    createHouse(data) {

        console.log('data in the service', data)

        const newHouse = new House(data)

        AppState.houses.push(newHouse)

        console.log('Houses after adding new house', AppState.houses)

        this.saveHouses()




    }


    saveHouses() {

        saveState('houses', AppState.houses)


    }

    loadHouses() {

        AppState.houses = loadState('houses', [House])


    }


}

export const housesService = new HousesService()