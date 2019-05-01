/* Import test modules*/
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
  checkUniqueIndex
} = require('sequelize-test-helpers')

/* tests for AdmissionOfficerModel model */
const Pair = require('./../models/Pair.js')
const Student = require('./../models/Student.js')
const Mentor = require('./../models/Mentor.js')

describe('./../models/Pair.js', () => {

  const Model = Pair(sequelize, dataTypes)
  const instance = new Model()

  /* check if model is correct */
  checkModelName(Model)('Pair')

  /* check if attributes of model exist */
  context('checking properties of Pair...', () => {
      ;['id','time', 'voice_calls', 'messages', 'videos', 'active'].forEach(checkPropertyExists(instance))
  })

  /* test scopes */
  instance.active = true;
  var all = AdmissionOfficer.findAll;
  console.log(all); // should print out the current instance 

  /* check if assciations are right */

  const StudentModel = Student(sequelize, dataTypes)
  const MentorModel = Mentor(sequelize, dataTypes)
  context('associations for Pair', () => {
    before(() => {
      Model.associate({ StudentModel })
      Model.associate({ MentorModel })
    })
    it('student and Mentor belongsTo pair', () => {
      expect(Pair.belongsTo).to.have.been.calledWith(Mentor)
      expect(Pair.belongsTo).to.have.been.calledWith(Student)
    })
  })
})






