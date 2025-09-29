import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  houses = [
    new House({

      year: "1974",
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 375000,
      description: "Newly rennovated mid-century modern home",
      imgUrl: "https://rew-feed-images.global.ssl.fastly.net/imls/_cloud_media/property/residentialincome/98862307-1-835976ecc96808a93ea194115ae6c537-m.jpg",


    }),

    new House({


      year: "1985",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 1800,
      price: 400000,
      description: "Newly rennovated late century modern home",
      imgUrl: "https://easy-peasy.ai/cdn-cgi/image/quality=70,format=auto,width=500/https://media.easy-peasy.ai/07e2d71c-4d5f-4284-8e3a-a248c7977146/2024-09-18T09:14:34.618Z.jpg",
    }),

    new House({

      year: " 2005",
      bedrooms: 7,
      bathrooms: 5,
      sqft: 2100,
      price: 500000,
      description: "Newly rennovated early 21st century modern house",
      imgUrl: "https://i.redd.it/boeyr5uqqzda1.jpg",



    })



  ]



  cars = [
    new Car({
      make: 'mazda',
      model: 'miata',
      year: 1997,
      mileage: 2000,
      hasCleanTitle: true,
      price: 10000,
      condition: 'like new',
      imgUrl: 'https://images.unsplash.com/photo-1670800811909-7ca3e06fa878?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlhdGF8ZW58MHx8MHx8fDI%3D',
      color: '#1375d9',
      horsePower: 80,
      isDrivable: true
    }),
    new Car({
      make: 'chevy',
      model: 'cobalt',
      year: 2007,
      mileage: 200000,
      hasCleanTitle: true,
      price: 5,
      condition: 'ehhh',
      imgUrl: 'https://images.unsplash.com/photo-1714875153033-8e2aabb469ae?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZXZ5JTIwY29iYWx0fGVufDB8fDB8fHwy',
      color: '#2f7992',
      horsePower: 300,
      isDrivable: true
    }),
    new Car({
      make: 'toyota',
      model: 'supra',
      year: 1990,
      mileage: 20000,
      hasCleanTitle: false,
      price: 20000,
      condition: 'fair',
      imgUrl: 'https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VwcmF8ZW58MHx8MHx8fDI%3D',
      color: '#dbdbdd',
      horsePower: 170,
      isDrivable: true
    }),
    new Car({
      make: 'vw',
      model: 'bug',
      year: 1987,
      mileage: 300000,
      hasCleanTitle: false,
      price: 200,
      condition: 'seen better days',
      imgUrl: 'https://images.unsplash.com/photo-1659536806369-0114c406a20d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHx2dyUyMGJ1Z3xlbnwwfHwwfHx8Mg%3D%3D',
      color: '#c43d00',
      horsePower: 3,
      isDrivable: false
    }),

  ]
}

export const AppState = createObservableProxy(new ObservableAppState())