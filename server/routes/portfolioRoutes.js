const express = require("express");
const path = require("path");
const router = express.Router();
const {
  Intros,
  Abouts,
  Interns,
  Projects,
  Contacts,
  Educations,
} = require("../Models/portfolioModel");
const User = require("../Models/usersModel");
// To get  all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intros.find();
    const abouts = await Abouts.find();
    const interns = await Interns.find();
    const projects = await Projects.find();
    const contacts = await Contacts.find();
    const educations = await Educations.find();

    res.status(200).send({
      intro: intros,
      about: abouts,
      project: projects,
      contact: contacts,
      intern: interns,
      education: educations,
    });
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    res.status(500).send({ error: "Failed to fetch portfolio data" });
  }
});

//To update intro
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intros.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
//To update about
router.post("/update-about", async (req, res) => {
  try {
    const about = await Abouts.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "About updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
//To add experiences
router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Interns(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
//To update experiences
router.post("/update-experience", async (req, res) => {
  try {
    const experience = await Interns.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
//To delete experiences
router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Interns.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
//To add projects
router.post("/add-project", async (req, res) => {
  try {
    const project = new Projects(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
//To update projects
router.post("/update-project", async (req, res) => {
  try {
    const project = await Projects.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
//To delete experiences
router.post("/delete-project", async (req, res) => {
  try {
    const project = await Projects.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: project,
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
//To Update Contact Details
router.post("/update-contact", async (req, res) => {
  try {
    const contact = await Contacts.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: contact,
      success: true,
      message: "Intro updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
//Admin login
router.post("/admin-login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (user) {
      const userWithoutPassword = { ...user.toObject(), password: undefined };
      res.status(200).send({
        data: userWithoutPassword,
        success: true,
        message: "Login successful",
      });
    } else {
      res.status(200).send({
        data: null,
        success: false,
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).send({ error: "An error occurred during login" });
  }
});

module.exports = router;
