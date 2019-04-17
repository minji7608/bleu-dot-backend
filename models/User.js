const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        role: {
            type: Sequelize.CHAR(1), // S: student, M: mentor, C: college adm.
            allowNull: false
        },
        email: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
        phone: {
            type: Sequelize.CHAR(20),
            allowNull: false
        },
        active: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
        
        
    });
    
    User.associate = function(models) {
        models.User.hasOne(models.Student);
        models.User.hasOne(models.Mentor);
    };

    
    return User 
};

//  module.exports = User

