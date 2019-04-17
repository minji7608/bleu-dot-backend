var User = require('./User');


module.exports = (sequelize, DataTypes) => {

    const AdmissionOfficer = sequelize.define('AdmissionOfficer', {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: sequelize.STRING,
            allowNull: false
        },
        last_name: {
            type: sequelize.STRING,
            allowNull: false
        },
        college: {
            type: sequelize.STRING,
            allowNull: false
        },
        active: {
            type: sequelize.TINYINT,
            allowNull:false
        }, 
        user_id: {
            type: sequelize.TINYINT,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            },
        }
    }, {
        defaultScope: {
          where: {
            active: true
          }
        },       
        scopes: {
        activeUsers: {
            include: [
             { model: User, where: { active: true }}
           ]
        }
        
    }
});

return AdmissionOfficer
};
