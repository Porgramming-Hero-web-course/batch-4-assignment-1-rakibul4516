"use strict";
{
    // Problem-8
    function validateKeys(obj, keys) {
        return keys.every(key => key in obj);
    }
    const person = {
        name: 'Rakibul',
        age: 25,
        email: 'rakibul@gmail.com'
    };
    console.log(validateKeys(person, ['name', 'age', 'email']));
    //
}
