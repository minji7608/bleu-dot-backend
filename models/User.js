module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: type.STRING,
            allowNull: false
        },
        password: {
            type: type.STRING,
            allowNull: false
        },
        role: {
            type: type.CHAR(1), // S: student, M: mentor, C: college adm.
            allowNull: false
        },
        email: {
            type: type.VARCHAR(255),
            allowNull: false
        },
        phone: {
            type: type.VARCHAR(20),
            allowNull: false
        },
        active: {
            type: type.BOOLEAN,
            allowNull: false
        }
    });
    
    return Pair 
};

