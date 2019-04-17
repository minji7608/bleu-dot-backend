/* Import test modules*/
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
  checkUniqueIndex
} = require('sequelize-test-helpers')

/* tests for Student model */
const Student = require('./../models/Student.js')
const User = require('./../models/User.js')

describe('./../models/Student.js', () => {

  const Model = Student(sequelize, dataTypes)
  const instance = new Model()
  checkModelName(Model)('Student')

  /* check if attributes of model exist */
  context('checking properties of Student...', () => {
      ;['id','first_name','last_name', 'highschool','gpa', 'SAT', 'ACT', 'gender', 
      'internships', 'address', 'age', 'sports', 'hobbies', 'interests', 'resume', 
      'active'].forEach(checkPropertyExists(instance))
  })

  /* check if assciations are right */
  /* TODO: comment out below code once basic test cases work */

  /*
  context('checking associations for Student...', () => {

    const UserModel = User(sequelize, dataTypes)
    before(() => {
      Model.associate({ UserModel })
    })
     
    it('Student belongsTo User', () => {
      expect(Student.belongsTo).to.have.been.calledWith(User)
    })

  })
  */
   
})






