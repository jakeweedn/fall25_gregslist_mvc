import { generateId } from "../utils/GenerateId.js";

export class Guitar {

    constructor(data) {

        this.id = data.id || generateId();
        this.make = data.make
        this.model = data.model
        this.price = data.price
        this.color = data.color
        this.numberOfStrings = data.numberOfStrings
        this.imgUrl = data.imgUrl


    }

    get guitarListings() {

        return `
        <div class = "col-md-6 mb-3">
            <div class = "shadow postion-relative guitar-border">
            
            
            <img src = "${this.imgUrl}" alt=${this.price} class="img-fluid">

            <h3> ${this.make}, ${this.model}, ${this.price} </h3>
        
        
            <button onclick = "app.guitarsController.deleteGuitar('${this.id}')" class="btn btn-secondary m-2"> Delete Guitar 🚮</button> 
            
            </div>

        </div>
        
        
        `
    }
}