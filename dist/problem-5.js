"use strict";
{
    //Problem-5
    function getProperty(obj, key) {
        return obj[key];
    }
    const person = {
        name: 'Alice',
        age: 30,
        job: 'Engineer'
    };
    const name = getProperty(person, 'name');
    console.log(name);
    //
}
