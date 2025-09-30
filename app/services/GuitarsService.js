import { AppState } from "../AppState.js"
import { Guitar } from "../models/Guitar.js"
import { loadState, saveState } from "../utils/Store.js"


class GuitarsService {

    deleteGuitar(guitarId) {

        const guitarIndex = AppState.guitars.findIndex(guitar => guitar.id == guitarId)
        console.log('guitar', guitarIndex);

        AppState.guitars.splice(guitarIndex, 1)
        this.saveGuitars()



    }

    createGuitar(data) {

        console.log("data in the service", data)
        const newGuitar = new Guitar(data)

        AppState.guitars.push(newGuitar)
        console.log('Guitars after adding new guitar', AppState.guitars)

        this.saveGuitars()





    }





    saveGuitars() {

        saveState('guitars', AppState.guitars)


    }

    loadGuitars() {

        AppState.guitars = loadState('guitars', [Guitar])




    }

}

export const guitarsService = new GuitarsService()