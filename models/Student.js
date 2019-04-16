const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    var Student = sequelize.define('Student', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        highschool: {
            type: Sequelize.STRING,
            allowNull: false
        },
        gpa: {
            type: Sequelize.STRING,
            allowNull: false
        },
        SAT: {
            type: Sequelize.INTEGER
        },
        ACT: {
            type: Sequelize.INTEGER
        },
        gender: {
            type: Sequelize.CHAR(1), //F or M
            allowNull: false
        },
        internships: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        sports: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
        hobbies: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
        interests: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
        resume: {
            type: Sequelize.BLOB // can store file not greater than 64KB
        },
        active: {
            type: Sequelize.TINYINT,
            allowNull:false
        }
    });

    /*
    scopes: {
        activeUsers: {
          include: [
            { model: User, where: { active: true }}
          ]
        }
    }
    */

    Student.associate = function (models) {
        models.Student.belongsTo(models.User);
    };
        
    return Student 
};

