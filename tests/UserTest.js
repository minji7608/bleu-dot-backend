/* Import test modules*/
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
  checkUniqueIndex
} = require('sequelize-test-helpers')

/* tests for AdmissionOfficerModel model */
const User = require('./../models/User.js')
const AdmissionOfficer = require('./../models/AdmissionOfficer.js')
describe('./../models/User.js', () => {

  const Model = User(sequelize, dataTypes)
  const instance = new Model()
  checkModelName(Model)('User')

  /* check if attributes of model exist */
  context('checking properties of user...', () => {
    ;['id', 'username', 'password', 'role', 'email', 'phone', 'active'].forEach(checkPropertyExists(instance))
  })

})

