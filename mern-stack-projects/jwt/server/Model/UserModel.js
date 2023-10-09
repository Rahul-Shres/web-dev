const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({ 
    email: {
        type: 'string',
        required: ["true", "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: ["true", "Password is required"],
    }
})

userSchema.pre('save',async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
})

userSchema.schema.login = async function (email, password) {
    const user = await this.find({ email});
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        } throw Error("incorrect password")
    } else{
        throw Error("incorrect password");
    }
 }
module.exports = mongoose.model('Users', userSchema);   