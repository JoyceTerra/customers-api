const Sequelize = require('sequelize')
const sequelize = require('../db')

const Company = sequelize.define('companies', {
    name: {
      type: Sequelize.STRING,
      field: 'name',
      allowNull: false
    },
    foundingYear: {
        type: Sequelize.STRING,
        field: 'foundingYear',
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        field: 'description',
        allowNull: true
    }
},{
    timestamps: false,
    tableName: 'companies'
})

module.exports = Company

