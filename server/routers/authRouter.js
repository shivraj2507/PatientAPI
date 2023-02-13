const authController = require("../controllers/authController");
const router = require("express").Router();
const validateMiddleware = require("../middlewares/validate");

router.get("/GetPatientBy/:id", authController.GetPatientController);
router.get("/GetAllPatient", authController.GetAllPatientController);
router.post(
  "/PostPatient",
  validateMiddleware,
  authController.PostPatientController
);
router.put("/PutPatient/:id", authController.PutPatientController);
router.delete("/deletePatientBy/:id", authController.DeletePatientController);
router.delete("/deleteAllPatient", authController.DeleteAllPatientController);

module.exports = router;
