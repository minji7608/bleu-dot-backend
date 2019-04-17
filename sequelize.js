import Sequelize from 'sequelize';
import AdmissionOfficerModel from '/models/AdmissionOfficer';
import StudentModel from '/models/Student';
import MentorModel from '/models/Mentor';
import PairModel from '/models/Pair';
import UserModel from '/models/User';

const sequelize = new Sequelize('dbname', 'admin', 'password', {
    host: 'db',
    dialect: 'mysql'
});

const AdmissionOfficer = AdmissionOfficerModel(sequelize, Sequelize);
const Student = StudentModel(sequelize, Sequelize);
const Mentor = MentorModel(sequelize, Sequelize);
const Pair = PairModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

/* TODO: add relationship tags */

sequelize.sync()
.then(() => {
    console.log('db & table created!')

});

module.exports = {
    AdmissionOfficer,
    Student,
    Mentor,
    Pair,
    User
};