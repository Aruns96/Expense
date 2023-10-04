const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Expense = sequelize.define("expenses",{
    id:{
        type: Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    desc: Sequelize.STRING,
    typeExpense:Sequelize.STRING
    
});

module.exports = Expense;