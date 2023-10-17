require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

//Importing our routers
const { Router } = require("./routes/index");
const { Router: AirplaneRouter } = require("./routes/airplane");
const { Router: AirportRouter } = require("./routes/airport");
const { Router: AirlineRouter } = require("./routes/airline");
const { Router: TestRouter } = require("./routes/test");
const { Router: FlightRouter } = require("./routes/flight");
const { Router: FlightsRouter } = require("./routes/flights");

const AirLabs = require("./utils/airlabs");

//Import our MongoDB connector
const { connect } = require("./utils/db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Use our routers
app.use(Router);
app.use(AirplaneRouter);
app.use(AirportRouter);
app.use(AirlineRouter);
app.use(TestRouter);
app.use(FlightRouter);
app.use(FlightsRouter);

const PORT = process.env.PORT || 8080;

const a = { a: { hex: 1 }, b: { hex: 2 }, c: { hex: 3 } };

// a["d"] = { hex: 4 };
// b = a["d"];
// b.r = 69;

// for (const t in a) {
//     console.log(a[t]);
// }

app.listen(PORT, async () => {
    console.log(`Listening on port: ${PORT}`);

    await connect();

    AirLabs.dataCollector(-1);
});
