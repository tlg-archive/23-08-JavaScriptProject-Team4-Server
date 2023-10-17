const express = require("express");
const Router = express.Router();
const axios = require("axios");
const AirLabs = require("../utils/airlabs");

Router.get("/api/flights/", async (req, res) => {
    try {
        //const result = AirLabs.Flights.map(function (flight) {
        const result = AirLabs.AirlabsFlights.map(function (flight) {
            return {
                hex: flight.hex,
                lat: flight.lat,
                lng: flight.lng,
                dir: flight.dir,
                flight_icao: flight.flight_icao,
                flight_iata: flight.flight_iata,
            };
        });
        res.send(result);
    } catch (error) {
        res.status(500).send({
            error: `An error ocurred trying to fetch the flights data ${error}`,
        });
    }
});

module.exports = { Router };
