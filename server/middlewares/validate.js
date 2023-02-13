const Patients = require("../models/Patient.js");

module.exports = async (req, res, next) => {
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
  if (
    !name ||
    !email ||
    !AadharCard ||
    !phone ||
    !fatherName ||
    !age ||
    !gender ||
    !DOB ||
    !address
  ) {
    return res.status(400).send("All fields are required");
  }
  // validate email
  var mail = /[^@]+@[a-zA-Z]+\.[a-zA-Z]{2,6}/;
  if (mail.test(email)) {
  } else {
    return res.status(403).send("Invalid email");
  }

  //validate mobile Number
  if (is_mobile_valid(phone)) {
  } else {
    return res.status(403).send("Invalid phone no");
  }
  function is_mobile_valid(phoneN) {
    var mobile = phoneN;
    if (mobile.length != 10) {
      return false;
    }
    intRegex = /[0-9 -()+]+$/;
    is_mobile = true;
    for (var i = 0; i < 10; i++) {
      if (intRegex.test(mobile[i])) {
        continue;
      } else {
        is_mobile = false;
        break;
      }
    }
    return is_mobile;
  }
  //validate aadhar card
  if (is_Aadhar_valid(AadharCard)) {
  } else {
    return res.status(403).send("Invalid Aadhar Card no");
  }
  function is_Aadhar_valid(AadharN) {
    var mobile = AadharN;
    if (mobile.length != 12) {
      return false;
    }
    intRegex = /[0-9 -()+]+$/;
    is_mobile = true;
    for (var i = 0; i < 10; i++) {
      if (intRegex.test(mobile[i])) {
        continue;
      } else {
        is_mobile = false;
        break;
      }
    }
    return is_mobile;
  }
  //check Patient email already present or not
  const oldPatientEmail = await Patients.findOne({ email });
  if (oldPatientEmail) {
    return res.status(409).send("This Email is already registered");
  }
  //check Patient phone already present or not
  const oldPatientPhone = await Patients.findOne({ phone });
  if (oldPatientPhone) {
    return res.status(409).send("This number is already registered");
  }
  //check Patient Aadhar already present or not
  const oldPatientAadhar = await Patients.findOne({ AadharCard });
  if (oldPatientAadhar) {
    return res.status(409).send("This AadharCard is already registered");
  }

  //In name only  alphabets are allowed
  var alphaExp = /^[A-Za-z\s]*$/;
  if (name.match(alphaExp || " ")) {
  } else {
    return res.status(400).send(" Only alphabets are allowed name");
  }
  //In Father name only  alphabets are allowed
  var alphaExp = /^[A-Za-z\s]*$/;
  if (fatherName.match(alphaExp)) {
  } else {
    return res.status(400).send(" Only alphabets are allowed father ");
  }

  //In gender only  alphabets are allowed
  var alphaExp = /^[a-zA-Z]+$/;
  if (gender.match(alphaExp || " ")) {
  } else {
    return res.status(401).send(" Only alphabets are allowed in gender");
  }

  next();
};
