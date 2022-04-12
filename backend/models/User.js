import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    resetToken: {
        type: String,
    },
    expireToken: {
        type: String,
    },
},{timestamps: true});

export default mongoose.model("User",UserSchema);