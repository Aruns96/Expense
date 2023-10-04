
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./utils/database");
const expenseRoute = require("./routes/expense")
const cors = require("cors")
const app = express();
app.use(cors());
app.use(bodyParser.json({extended:false}));
app.use("/expense",expenseRoute)

sequelize.sync().then(result=>{
    app.listen(3000);
}).catch(e => console.log(e))
