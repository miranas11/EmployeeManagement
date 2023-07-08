import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const employeeSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        uniquie: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    skills: {
        type: [String],
    },
});

const Employee = model("Employee", employeeSchema);
export default Employee;
