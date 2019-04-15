/* Import test modules*/
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
  checkUniqueIndex
} = require('sequelize-test-helpers')

/* tests for AdmissionOfficerModel model */
const Mentor = require('./../models/Mentor.js')
const User = require('./../models/User.js')

describe('./../models/Mentor.js', () => {

  const Model = Mentor(sequelize, dataTypes)
  const instance = new Model()
  checkModelName(Model)('Mentor')

  /* check if attributes of model exist */
  context('checking properties of Mentor...', () => {
      ;['id','first_name','last_name', 'highschool', 'applied_schools', 'college', 
  'major', 'gpa', 'SAT', 'ACT', 'gender', 'internships', 'address', 'age', 'sports', 
  'hobbies', 'interests', 'resume', 'active'].forEach(checkPropertyExists(instance))
  })

  /* check if assciations are right */
  /* TODO: comment out below code once basic test cases work */

//   const userModel = User(sequelize, dataTypes)
//   context('associations for mentor', () => {
//     before(() => {
//       Model.associate({ UserModel })
//     })
//     it('AdmissionOfficer belongsTo User', () => {
//       expect(Mentor.belongsTo).to.have.been.calledWith(User)
//     })
//   })
// })






