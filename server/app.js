if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cors Middleware
app.use(cors());

// Router
app.use(require('./routers/index'));

// Server Greetings
app.get('/', (req, res) => {
    res.send('Welcome to SendIt App server API!');
});

// Error Handlers


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} http://localhost:3000/`);
});