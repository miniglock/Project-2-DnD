var express = require("express");
var router = express.Router();
const passport = require("passport");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/characters/",
    failureRedirect: "/"
  })
);
// OAuth logout route
router.get("/logout", (req, res) => {
  console.log("you're logged out");
  req.logout();
  res.redirect("/");
});

module.exports = router;
