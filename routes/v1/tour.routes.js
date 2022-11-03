const express = require("express");
const tourController = require("../../controllers/tour.controller");
const viewCount = require("../../middleware/viewCount");

const router = express.Router();

router.route("/")
    .get(tourController.getAllTourController)
    .post(tourController.createATourController)

router.route("/bulk-update").patch(tourController.bulkUpdateController)

router.route("/cheapest").get(tourController.cheapestTourController)
router.route("/trending").get(tourController.trendingController)

router.route("/:id")
    .get(tourController.getTourByIdConroller)
    .delete(tourController.deleteToureController)
    .patch(tourController.updateATourController)
module.exports = router