{
    //Problem-5

    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }
    
    const person = {
        name: 'Rakibul',
        age: 25,
        job: 'Developer'
    };
    
    const name = getProperty(person, 'name'); 
    
    console.log(name); 
    
    //
}