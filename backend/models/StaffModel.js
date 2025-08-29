const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['staff', 'manager', 'account', 'client'] },
    address:{ type: String, default: "" },
    phone: { type: String, required: true, unique: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    profileImage: { type: String, default: "" },
    services: [{
        type: Schema.Types.ObjectId,
        ref: 'services' // Adjust if your service model is named differently
    }],
    active: { type: Boolean, default: true }
}, { timestamps: true })

const StaffModel=mongoose.model('staffs',staffSchema)
module.exports=StaffModel;