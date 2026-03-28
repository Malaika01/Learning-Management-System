import mongoose from "mongoose";
import dns from "dns";

// Force Node.js to use Google DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);

mongoose.set('strictQuery', false);

const connectionToDB = async () => {
    try {
        const { connection } = await mongoose.connect(
            process.env.MONGODB_URL || `mongodb://localhost:27017/my_database`
        )
        if (connection) {
            console.log(`Connected to MongoDB: ${connection.host}`);
        }
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

export default connectionToDB;