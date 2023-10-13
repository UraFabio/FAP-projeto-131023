const User = require("../models/userModel")



exports.createUser = async (req, res) => {
    try {
        const {nome, email, senha} = req.body
        console.log(nome, email, senha)
        const newUser = await User.create({nome, email, senha})
        console.log("Cadastrado com sucesso")
        res.json(newUser)

    } catch (error) {
        res.json({error: error.message})
    }
}


exports.getUser = async (req,res) => {
    try {
        const users = await User.findAll() 
        res.json(users)
    } catch (error) {
        res.json({error: error.message})
        
    }
}