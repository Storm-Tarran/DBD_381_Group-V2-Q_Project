//Here we will put in sample users to seed the database
const Users = require('../models/users');
const { randFullName, randEmail, randPhoneNumber, randPassword, randAddress } = require('@ngneat/falso');

async function seedUsers() {
    await Users.deleteMany({}); // Clear existing users

    // Generate 50 sample users
    const sampleUsers = Array.from({ length: 50 }, () => ({
        name: randFullName(),
        email: randEmail(),
        password: randPassword({ min: 1, max: 15 }),
        phoneNumber: randPhoneNumber(),
        address: randAddress(),
        isAdmin: false // Default to non-admin users
    }));

    // Insert the sample users into the database
    await Users.create(sampleUsers);

    console.log(`✅ Seeded ${sampleUsers.length} users`);
    
}
module.exports = seedUsers;