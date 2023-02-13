const Patients = require("../models/Patient.js");
const PostPatientController = async (req, res) => {
  try {
    const {
      name,
      email,
      AadharCard,
      phone,
      fatherName,
      age,
      gender,
      DOB,
      address,
    } = req.body;

    const patient = await Patients.create({
      name,
      email,
      AadharCard,
      phone,
      fatherName,
      age,
      gender,
      DOB,
      address,
    });
    console.log(patient);
    return res.status(201).send("Patient is added in database");
  } catch (error) {
    console.log(error);
  }
};
const GetPatientController = async (req, res) => {
  try {
    const _id = req.params.id;
    const PatientData = await Patients.findById(_id);

    if (!PatientData) {
      return res.send(404).send("Patient is not present");
    } else {
      res.send(PatientData);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const GetAllPatientController = async (req, res) => {
  try {
    const PatientData = await Patients.find();
    res.send(PatientData);
  } catch (error) {
    res.status(500).send(error);
  }
};
const PutPatientController = async (req, res) => {
  try {
    const _id = req.params.id;
    const updatePatient = await Patients.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updatePatient);
  } catch (error) {
    res.status(404).send(error);
  }
};
const DeletePatientController = async (req, res) => {
  try {
    const _id = req.params.id;
    const DeletePatient = await Patients.findByIdAndDelete(_id);
    if (!DeletePatient) {
      return res.status(400).send("Patient id is not correct");
    } else {
      res.send(DeletePatient);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const DeleteAllPatientController = async (req, res) => {
  try {
    const DeletePatient = await Patients.deleteMany();
    if (!DeletePatient) {
      return res.status(400).send("Patient id is not correct");
    } else {
      res.send(DeletePatient);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  PostPatientController,
  GetPatientController,
  GetAllPatientController,
  PutPatientController,
  DeletePatientController,
  DeleteAllPatientController,
};
