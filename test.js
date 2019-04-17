const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} = require('sequelize-test-helpers')


const AdmissionOfficerModel = require('./models/AdmissionOfficer.js')
describe('./models/AdmissionOfficer.js', () => {
  const Model = AdmissionOfficerModel(sequelize, dataTypes)
  // const instance = new Model()
  // checkModelName(Model)('Simple')
  // context('properties', () => {
  //   ;['name', 'email'].forEach(checkPropertyExists(instance))
  // })
})


