const express =  require("express")
const router = express.Router()
const { userData } = require("../controllers/getUserData");
const { userMess } = require("../controllers/getuserMesseges");

router.get("/getuser",userData);
router.get("/getmess", userMess);
module.exports = router;