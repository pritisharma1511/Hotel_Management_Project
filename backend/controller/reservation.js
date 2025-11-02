import ErrorHandler from "../error/error.js";
import {Reservation}from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
        const { firstName, lastName, email, phone, time, date } = req.body;
        if (!firstName || !lastName || !email || !phone || !time || !date) {
            return next(new ErrorHandler("All fields are required", 400));
        }
        try {
            const newReservation = await Reservation.create({
                firstName,
                lastName,
                email,
                phone,
                time,
                date
            });
            res.status(201).json({
                success: true,
                data: newReservation
            });
        } catch (error) {
            if (error.name === "ValidationError") {
                const messages = Object.values(error.errors).map((val) => val.message);
                return next(new ErrorHandler(messages.join(", "), 400));
            }       
            next(new ErrorHandler(error.message, 500));
        }
    };