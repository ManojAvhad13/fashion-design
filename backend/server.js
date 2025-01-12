require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: ["https://fashion-design-1whq.vercel.app"],
        method: ["POST", "GET"],
        credentials: true
    }
));

// Correctly formatted MongoDB URI
const mongoURI = "mongodb://localhost:27017/fashionTailorDB"; // For local MongoDB

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("Database connection error:", err));

app.use("/api", require("./routes/api"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
