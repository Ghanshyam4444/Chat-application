const express = require("express");
const messageController = require("../controllers/messageControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
router.use(express.json());
router.route("/").post(protect, messageController.sendMessage);
router.route("/:chatId").get(protect, messageController.allMessages);
module.exports = router;
