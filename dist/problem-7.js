"use strict";
{
    //Problem-7
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }
    const myCar = new Car('Toyota', 'Corolla', 2015);
    const carAge = myCar.getCarAge();
    console.log(`The car's age is: ${carAge} years.`);
    //
}
