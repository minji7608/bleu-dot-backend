import Sequelize from 'sequelize';
import AdmissionOfficerModel from '/models/user';

const sequelize = new Sequelize('dbname', 'admin', 'password', {
    host: 'db',
    dialect: 'mysql'
});

const AdmissionOfficer = AdmissionOfficerModel(sequelize, Sequelize);

sequelize.sync()
.then(() => {
    console.log('Admission Officer db and admission officer table have been created')

});

module.exports = AdmissionOfficer;