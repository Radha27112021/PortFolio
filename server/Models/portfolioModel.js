const mongoose = require("mongoose");

const introSchema = new mongoose.Schema(
  {
    welcomeText: { type: String, required: true },
    name: { type: String, required: true },
    caption: { type: String, required: true },
    description: { type: String, required: true },
  },
  { collection: "intro" }
);

const aboutSchema = new mongoose.Schema(
  {
    description1: { type: String, required: true },
    description2: { type: String, required: true },
    skills: { type: Array, required: true },
  },
  { collection: "about" }
);

const internshipSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    title: { type: String, required: true },
    period: { type: String, required: true },
    description: { type: String, required: true },
  },
  { collection: "internship" }
);

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    technologyUsed: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
  },
  { collection: "projects" }
);

const educationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    period: { type: String, required: true },
    description: { type: String, required: true },
    place: { type: String, required: true },
  },
  { collection: "education" }
);

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  { collection: "contact" }
);

module.exports = {
  Intros: mongoose.model("Intros", introSchema),
  Abouts: mongoose.model("Abouts", aboutSchema),
  Interns: mongoose.model("Interns", internshipSchema),
  Projects: mongoose.model("Projects", projectSchema),
  Educations: mongoose.model("Educations", educationSchema),
  Contacts: mongoose.model("Contacts", contactSchema),
};
