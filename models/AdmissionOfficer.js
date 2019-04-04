var validator = require('validator');

module.exports = (sequelize, DataTypes) => {
    const AdmissionOfficer = sequelize.define('AdmissionOfficer', {
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
            if(validator.isAlpha(last_name) !== true){
                let msg = format('last_mame.%s(%s) is not a valid name');
                throw new Error(msg);
            }
        },
        college: {
            type: type.STRING,
            allowNull: false,
            if(validator.isAlpha(college) !== true){
                let msg = format('Enter valid college name');
                throw new Error(msg);
            }
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
    
    return AdmissionOfficer
};

