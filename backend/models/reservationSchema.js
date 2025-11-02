import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "First name must be at least 3 characters long"],
        maxlength: [30, "First name must be at most 30 characters long"]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "Last name must be at least 3 characters long"],
        maxlength: [30, "Last name must be at most 30 characters long"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email address"]
    },
    phone: {
        type: String,
        required: true,
        minlength: [7, "Phone number must be at least 7 digits long"],
        maxlength: [10, "Phone number must be at most 10 digits long"],
        validate: [validator.isMobilePhone, "Please enter a valid phone number"]
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    },
    {
        timestamps: true
    }
);

export const Reservation = mongoose.model("Reservation", reservationSchema);


