const express = require("express");
const app = express();

const autoRouter = require("./app/controllers/AutoRouter");
const router = new autoRouter();

const routes = router.start(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(routes);


app.listen(3000);
