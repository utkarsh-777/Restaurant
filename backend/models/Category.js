import mongoose from 'mongoose';
const {ObjectId} = mongoose.Schema.Types;

const CategorySchema = mongoose.Schema({
    categoryType: {
        type:String,
        required: true,
    },
    categoryDescription: {
        type: String,
    },
    items: [{
        type: ObjectId,
        ref: 'MenuItem'
    }],
},{timestamps: true});

export default mongoose.model("Category",CategorySchema);