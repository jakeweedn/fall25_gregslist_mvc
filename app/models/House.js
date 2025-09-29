import { generateId } from "../utils/GenerateId.js";

export class House {
    constructor(data) {

        this.id = data.id || generateId();
        this.year = data.year;
        this.bedrooms = data.bedrooms;
        this.bathrooms = data.bathrooms;
        this.sqft = data.sqft;
        this.price = data.price;
        this.description = data.description;
        this.imgUrl = data.imgUrl;

    }

    get houseListings() {

        return /*HTML*/`
        <div class="col-md-6 mb-3">
        

        <div class="shadow position-relative car-border" style="border-color: blue;">

        <img src= ${this.imgUrl} alt = ${this.year}, ${this.price} class = "house-img img-fluid">
       
        <h3> ${this.year},  $ ${this.price}, ${this.sqft} sq. ft., ${this.description} </h3>
        <p>  </p>

        
        <button onclick="app.housesController.deleteHouse('${this.id}')" class=" btn btn-secondary m-2"> Delete House 🚮</button>  
        </div>
        
       
       
        </div>


        
        `

    }


}


