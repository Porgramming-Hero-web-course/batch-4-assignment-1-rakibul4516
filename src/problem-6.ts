{
    //Problem-6

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
        return { ...profile, ...updates };
    }

    const originalProfile: Profile = {
        name: 'John Doe',
        age: 28,
        email: 'john.doe@example.com'
    };

    const profileUpdates: Partial<Profile> = {
        age: 29,
        email: 'john.new@example.com'
    };
    
    const updatedProfile = updateProfile(originalProfile, profileUpdates);
    
    console.log(updatedProfile);

    //
}