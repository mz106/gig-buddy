const router = require("express").Router();

//from fetch_user_join

router.post("/register", (req, res) => {
    res.status(201).json({message: "/user/register working"});
});

//from fetch_user_login

router.post("/login", (req, res) => {
    res.status(201).json({message: "/user/login working"});
});

module.exports = router;