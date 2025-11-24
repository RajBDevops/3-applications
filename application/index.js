const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// call order microservice
app.get("/orders", async (req, res) => {
    try {
        const response = await axios.get("http://orderservice:8080/api/orders");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Order service unreachable" });
    }
});

// call patient microservice
app.get("/patients", async (req, res) => {
    try {
        const response = await axios.get("http://patientservice:4000/api/patients");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Patient service unreachable" });
    }
});

app.get("/", (req, res) => {
    res.send("Main Application Service is running.");
});

app.listen(PORT, () => console.log(`Application running on port ${PORT}`));
