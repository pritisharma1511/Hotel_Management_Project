import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbname:"RESTUARANT"
    }).then(() => {
        console.log("Database connected successfully");
    }).catch((err) => {
        console.log("Database connection failed", err);
    }
    );
}
export default dbConnection;