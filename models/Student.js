module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
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
        highschool: {
            type: type.STRING,
            allowNull: false
        },
        gpa: {
            type: type.STRING,
            allowNull: false
        },
        SAT: {
            type: type.INTEGER
        },
        ACT: {
            type: type.INTEGER
        },
        gender: {
            type: type.CHAR(1), //F or M
            allowNull: false
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
            allowNull: false
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
            type: type.BLOB // can store file not greater than 64KB
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
        
    return Student 
};

