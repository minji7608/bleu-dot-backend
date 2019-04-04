var validator = require('validator');

module.exports = (sequelize, DataTypes) => {
    const Mentor = sequelize.define('Mentor', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: type.STRING,
            allowNull: false,
            if(validator.isAlpha(first_name) !== true){
                let msg = format('first_name.%s(%s) is not a valid name');
                throw new Error(msg);
            } 
        },
        last_name: {
            type: type.STRING,
            allowNull: false,
            if(validator.isAlpha(first_name) !== true){
                let msg = format('last_name.%s(%s) is not a valid name');
                throw new Error(msg);
            } 
        },
        highschool: {
            type: type.STRING,
            allowNull: false
        },
        applied_schools: {
            type: type.ARRAY(type.STRING),
            allowNull: false
        },
        college: {
            type: type.STRING,
            allowNull: false
        },
        major: {
            type: type.STRING,
            allowNull: false
        },
        gpa: {
            type: type.STRING,
            allowNull: false,
            if((gpa >= 0 && gpa <= 4.5) !== true){
                let msg = format('gpa.%d(%d) is not a valid gpa');
                throw new Error(msg);
            }
        },
        SAT: {
            type: type.INTEGER,
            if((SAT >= 0 && SAT <= 2400) !== true){
                let msg = format('SAT.%d(%d) is not a valid SAT grade');
                throw new Error(msg);
            }
        },
        ACT: {
            type: type.INTEGER,
            if((ACT >= 0 && ACT <= 36) !== true){
                let msg = format('ACT.%d(%d) is not a valid ACT grade');
                throw new Error(msg);
            }
        },
        gender: {
            type: type.CHAR(1), //F or M
            allowNull: false,
            if ((gender === 'F'||gender === 'M') !== true){
                let msg = format('gender.%s(%s) is not a valid gender');
                throw new Error (msg);
            }
        },
        internships: {
            type: type.ARRAY(type.STRING)
        },
        address: {
            type: type.STRING,
            allowNull: false
        },
        age: {
            type: type.INTEGER,
            allowNull: false,
            if((age >= 0 && age <= 60) !== true){
                let msg = format('age.%d(%d) is out of range');
                throw new Error(msg);
            }
        },
        sports: {
            type: type.ARRAY(type.STRING)
        },
        hobbies: {
            type: type.ARRAY(type.STRING)
        },
        interests: {
            type: type.ARRAY(type.STRING)
        },
        resume: {
            type: type.BLOB // can store file smaller than 64KB
        },
        active: {
            type: type.TINYINT,
            allowNull:false
        }
    });

    scopes: {
        activeUsers: {
          include: [
            { model: User, where: { active: true }}
          ]
        }
    }
    
    return Mentor 
};

var options = {
    validation:
    'allowed_exts' :['txt', 'pdf', 'doc']
}