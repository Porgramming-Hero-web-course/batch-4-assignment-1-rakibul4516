{
    // Problem-8

    function validateKeys<T>(object: T, keys: (keyof T)[]): boolean {
        return keys.every(key => key in object);
      }
      
      const person = {
        name: 'Rakibul',
        age: 25,
        email: 'rakibul@gmail.com'
      };

      const myKeys = validateKeys(person, ['name', 'age', 'email']);
      console.log(myKeys); 
      
      

    //
}