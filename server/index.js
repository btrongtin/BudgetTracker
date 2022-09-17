import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.6ll59xm.mongodb.net/?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
// app.use('/api/auth', authRouter);
// app.use('/api/spend', spendRouter);
// app.use("/api/statistic", statisticRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
