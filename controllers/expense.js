const Expense = require("../model/expense")

exports.postExpense = async (req,res)=>{
      try{
          const amount = req.body.number;
          const desc = req.body.desc;
          const typeExpense = req.body.typeExpense;
          
          const data = await Expense.create({amount:amount,desc:desc,typeExpense:typeExpense});
          res.status(201).json({newExpenseData:data})


      }catch(e){
          res.status(500).json({err:e});
      }
}

exports.getExpense = async (req,res)=>{
    try{
       const data = await Expense.findAll();
       res.status(200).json({allExpense:data})

    }catch(e){
        res.status(500).json({err:e});
    }
}

exports.deleteExpense = async (req,res)=>{
    try{
       if(!req.params.id == "undefined"){
        return res.status(400).json({err:"id not found"});
       }
       const expenseId = req.params.id;

       await Expense.destroy({where:{id:expenseId}});
       res.sendStatus(200);

    }catch(e){
        res.status(500).json({err:e});
    }
}