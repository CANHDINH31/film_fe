const express = require("express");
const router = express.Router();

const {
  create,
  list,
  update,
  findOne,
  deleteData,
} = require("../controllers/vote.controller");

const asyncMiddelware = require("../middlewares/asyncHandle");

router.route("/").post(asyncMiddelware(create));
router.route("/:id").delete(asyncMiddelware(deleteData));
router.route("/:id").put(asyncMiddelware(update));
router.route("/:id").get(asyncMiddelware(findOne));
router.route("/").get(asyncMiddelware(list));

module.exports = router;
