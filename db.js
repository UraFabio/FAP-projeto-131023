const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('projeto131023','root','Abracadabra123@',{
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log("Banco de dados conectado com sucesso")
}catch(error){
    console.log("ERRO: "+error)
}

module.exports = sequelize

