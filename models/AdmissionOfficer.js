module.exports = (sequelize, DataTypes) => {
    const AdmissionOfficer = sequelize.define('AdmissionOfficer', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: type.STRING,
            allowNull: false
        },
        last_name: {
            type: type.STRING,
            allowNull: false
        },
        college: {
            type: type.STRING,
            allowNull: false
        }
    });
    
    return AdmissionOfficer
};

