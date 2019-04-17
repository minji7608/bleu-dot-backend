/* Import test modules*/
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
  checkUniqueIndex
} = require('sequelize-test-helpers')

/* tests for AdmissionOfficerModel model */

const AdmissionOfficer = require('./../models/AdmissionOfficer.js')
const User = require('./../models/User.js')
describe('./models/AdmissionOfficer.js', () => {

  const Model = AdmissionOfficer(sequelize, dataTypes)
  const instance = new Model()
  checkModelName(Model)('AdmissionOfficer')

  /* check if attributes of model exist */
  context('checking properties of AdmissionOfficer...', () => {
    ;['id', 'first_name', 'last_name', 'college', 'active'].forEach(checkPropertyExists(instance))
  })

  /* check if assciations are right */
  /* TODO: comment out below code once basic test cases work */

  // const userModel = User(sequelize, dataTypes)
  // context('checking associations for AdmissionOfficer', () => {
  //   before(() => {
  //     Model.associate({ UserModel })
  //   })
  //   it('AdmissionOfficer belongsTo User', () => {
  //     expect(AdmissionOfficer.belongsTo).to.have.been.calledWith(User)
  //   })
  // })
})


