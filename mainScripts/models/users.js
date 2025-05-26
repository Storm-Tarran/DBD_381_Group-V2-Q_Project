//Here is the schema for the users collection
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const addressSchema = new mongoose.Schema({
  street:{type: String},
  city:{ type: String},
  state:{ type: String},
  zipCode:{ type: String}
}, { _id: false });

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: addressSchema,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

userSchema.pre('save', async function () {
  try{
    var user = this;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);

    user.password = hashPassword;
  }catch(error){
    console.log(error);
    throw new Error('Error hashing password');
  }
});

module.exports = mongoose.model('Users', userSchema);