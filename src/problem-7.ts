{
    //Problem-7
    
    class Car {
        make: string;
        model: string;
        year: number;
      
        constructor(make: string, model: string, year: number) {
          this.make = make;
          this.model = model;
          this.year = year;
        }
      
        getCarAge(): number {
          const currentYear = new Date().getFullYear();
          return currentYear - this.year;
        }
      }
      
      
      const myCar = new Car('Toyota', 'Corolla', 2015);
      const carAge = myCar.getCarAge()
      console.log(`The car's age is: ${carAge} years.`);
      
    //
}