<<<<<<< HEAD
const Sequelize = require('sequelize');
=======
var options = {
    validation:
    'allowed_exts' :['txt', 'pdf', 'doc']
}
>>>>>>> remotes/origin/validations

module.exports = (sequelize, DataTypes) => {
    var Student = sequelize.define('Student', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,
            if(validator.isAlpha(first_name) !== true){
                let msg = format('first_name.%s(%s) is not a valid name');
                throw new Error(msg);
            } 
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
            if(validator.isAlpha(first_name) !== true){
                let msg = format('last_name.%s(%s) is not a valid name');
                throw new Error(msg);
            }
        },
        highschool: {
            type: Sequelize.STRING,
            allowNull: false
        },
        gpa: {
            type: Sequelize.STRING,
            allowNull: false,
            if((gpa >= 0 && gpa <= 4.5) !== true){
                let msg = format('gpa.%d(%d) is not a valid gpa');
                throw new Error(msg);
            }
        },
        SAT: {
            type: Sequelize.INTEGER,
            if((SAT >= 0 && SAT <= 2400) !== true){
                let msg = format('SAT.%d(%d) is not a valid SAT grade');
                throw new Error(msg);
            }
        },
        ACT: {
            type: Sequelize.INTEGER,
            if((ACT >= 0 && ACT <= 36) !== true){
                let msg = format('ACT.%d(%d) is not a valid ACT grade');
                throw new Error(msg);
            }
        },
        gender: {
            type: Sequelize.CHAR(1), //F or M
            allowNull: false,
            if ((gender === 'F'||gender === 'M') !== true){
                let msg = format('gender.%s(%s) is not a valid gender');
                throw new Error (msg);
            }
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
            allowNull: false,
            if((age >= 0 && age <= 50) !== true){
                let msg = format('age.%d(%d) is out of range');
                throw new Error(msg);
            }
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

