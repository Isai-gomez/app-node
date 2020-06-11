const express = require("express");
const passport = require("passport");
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require("../lib/auth");
router.get("/singup", isNotLoggedIn, (req, res) => {
  res.render("auth/singup");
});
router.post(
  "/singup",
  passport.authenticate("local.singup", {
    successRedirect: "/profile",
    failureRedirect: "/singup",
    failureFlash: true,
  })
);
router.get("/signin", (req, res) => {
  res.render("auth/signin");
});
router.post("/signin", (req, res, next) => {
  passport.authenticate("local.signin", {
    successRedirect: "/profile",
    failureRedirect: "/signin",
    failureFlash: true,
  })(req, res, next);
});
router.get("/profile", isLoggedIn, (rep, res) => {
  res.render("profile");
});
router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/signin");
});
module.exports = router;
