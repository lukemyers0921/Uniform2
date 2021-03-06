const router = require("express").Router();
const filledController = require("../../controllers/filledController");

// Matches with "/api/filled"
router.route("/")
  .get(filledController.findAll)
  .post(filledController.create);

// Matches with "/api/filled/:id"
router
  .route("/:id")
  .get(filledController.findById)
  .put(filledController.update)
  .delete(filledController.remove);

module.exports = router;
