const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    profileImage: { type: String, default: "" },
    active: { type: Boolean, default: true }
}, { timestamps: true })

const ServiceModel=mongoose.model('services',serviceSchema)
module.exports=ServiceModel;