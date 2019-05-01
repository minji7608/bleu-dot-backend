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
const Student = require('./../models/Student.js')

describe('./../models/User.js', () => {

  const Model = User(sequelize, dataTypes)
  const instance = new Model()
  checkModelName(Model)('User')

  /* check if attributes of model exist */
  context('checking properties of user...', () => {
    ;['id', 'username', 'password', 'role', 'email', 'phone', 'active'].forEach(checkPropertyExists(instance))
  })

  /* test scopes */
  instance.active = true;
  var all = AdmissionOfficer.findAll;
  console.log(all); // should print out the current instance 

  
  context('checking associations for Student...', () => {

    const StudentModel = Student(sequelize, dataTypes)
    before(() => {
      Model.associate({ StudentModel })
    })
     
    it('User hasOne Student', () => {
      expect(User.hasOne).to.have.been.calledWith(StudentModel)
    })

  })
  

})

