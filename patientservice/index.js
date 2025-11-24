const express = require("express");
const app = express();
const PORT = 4000;

app.get("/api/patients", (req, res) => {
    res.json([
        { id: 1, name: "Raj", age: 26 },
        { id: 2, name: "Anita", age: 32 }
    ]);
});

app.get("/", (req, res) => {
    res.send("Patient Service is running.");
});

app.listen(PORT, () => console.log(`Patient Service running on port ${PORT}`));
