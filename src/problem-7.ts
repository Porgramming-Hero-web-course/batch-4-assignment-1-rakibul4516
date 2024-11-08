{
    //Problem-7
    
    class Car {
        name: string;
        model: string;
        year: number;
      
        constructor(name: string, model: string, year: number) {
          this.name = name;
          this.model = model;
          this.year = year;
        }
      
        getCarAge(): number {
          const currentYear = new Date().getFullYear();
          return currentYear - this.year;
        }
      }
      
      
      const myCar = new Car('Toyota', 'Corolla', 2018);
      const carAge = myCar.getCarAge()
      console.log(`The car's age is: ${carAge} years.`);
      
    //
}