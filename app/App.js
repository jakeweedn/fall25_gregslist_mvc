import { CarsController } from './controllers/CarsController.js';
import { ExampleController } from './controllers/ExampleController.js';
import { GuitarsController } from './controllers/GuitarsController.js';
import { HousesController } from './controllers/HousesController.js';

class App {
  carsController = new CarsController()
  housesController = new HousesController()
  guitarsController = new GuitarsController()
}

window['app'] = new App()


