"use strict";
{
    function updateProfile(profile, updates) {
        return Object.assign(Object.assign({}, profile), updates);
    }
    const originalProfile = {
        name: 'John Doe',
        age: 28,
        email: 'john.doe@example.com'
    };
    const profileUpdates = {
        age: 29,
        email: 'john.new@example.com'
    };
    const updatedProfile = updateProfile(originalProfile, profileUpdates);
    console.log(updatedProfile);
    //
}
