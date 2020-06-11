const express = require("express");
const router = express.Router();
const pool = require("../database");
<<<<<<< HEAD
const { isLoggedIn } = require('../lib/auth');
=======
const { isLoggedIn } = require("../lib/auth");
>>>>>>> 9c5b54cc726a0729bf850f0c4369faf3f0846fd4
router.get("/add", isLoggedIn, (req, res) => {
  res.render("links/add");
});
router.post("/add", isLoggedIn, async (req, res) => {
  const { title, url, description } = req.body;
  const newLink = {
    title,
    url,
    description,
  };
  await pool.query("INSERT INTO links set ?", [newLink]);
  req.flash('success', 'Links saved successfully');
  res.redirect("/links");
});
<<<<<<< HEAD
router.get("/",isLoggedIn, async (req, res) => {
  const links = await pool.query("SELECT * FROM links");
  res.render("links/list", { links });
});
router.get("/delete/:id", isLoggedIn,async (req, res) => {
=======
router.get("/", isLoggedIn, async (req, res) => {
  const links = await pool.query("SELECT * FROM links");
  res.render("links/list", { links });
});
router.get("/delete/:id",isLoggedIn, async (req, res) => {
>>>>>>> 9c5b54cc726a0729bf850f0c4369faf3f0846fd4
  const { id } = req.params;
  await pool.query("DELETE FROM links WHERE ID = ?", [id]);
  req.flash('success','Links removed successfully');
  res.redirect("/links");
});
<<<<<<< HEAD
router.get("/edit/:id", isLoggedIn,async (req, res) => {
=======
router.get("/edit/:id", isLoggedIn, async (req, res) => {
>>>>>>> 9c5b54cc726a0729bf850f0c4369faf3f0846fd4
  const { id } = req.params;
  const link = await pool.query("SELECT * FROM links WHERE id = ?", [id]);
  res.render("links/edit", { link: link[0] });
});
<<<<<<< HEAD
router.post("/edit/:id", isLoggedIn,async (req, res) => {
=======
router.post("/edit/:id", isLoggedIn, async (req, res) => {
>>>>>>> 9c5b54cc726a0729bf850f0c4369faf3f0846fd4
  const { id } = req.params;
  const { title, url, description } = req.body;
  const newlinks = {
    title,
    url,
    description,
  };
  await pool.query("UPDATE links set ? WHERE id = ?", [newlinks, id]);
  req.flash('success','Links updated Succesfully'); 
  res.redirect("/links");
});
module.exports = router;
