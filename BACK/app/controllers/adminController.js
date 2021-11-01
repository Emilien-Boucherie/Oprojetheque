const Project = require("../models/project.js");
const Promo = require("../models/promo.js");
const User = require("../models/user.js");


const adminController = {
    /*************************/
    /*      PROJECT          */
    /*************************/
    /* Method to add new project */
    addProject: async (req, res) => {
        try {
            console.log("Je suis dans la methode addProject de l'adminController");
            const newProject = await Project.addProject(req.body);
            res.json(newProject);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    /* -----------------------------------------*/
    /* Method to update project */
    updateProject: async (req, res) => {
        try {
            console.log("Je suis dans la methode updateProject de l'adminController")
            const updateProject = await Project.updateProject(req.body)
            res.json(updateProject);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    /*************************/
    /*      PROMO            */
    /*************************/
    /* -----------------------------------------*/
    /* Method to add new promo */
    addPromo: async (req, res) => {
        try {
            console.log("Je suis dans la methode addPromo de l'adminController");
            const newPromo = await Promo.addPromo(req.body);
            res.json(newPromo);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    /* Method to update promo */
    updatePromo: async (req, res) => {
        try {
            console.log("Je suis dans la methode updatePromo de l'adminController")
            const updatePromo = await Promo.updatePromo(req.body)
            res.json(updatePromo);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    /*************************/
    /*      STUDENT          */
    /*************************/
    /* -----------------------------------------*/
    /* Method to add new student */
    addStudent: async (req, res) => {
        try {
            console.log("Je suis dans la methode addStudent de l'adminController");
            const newStudent = await User.addStudent(req.body);
            res.json(newStudent);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    /* -----------------------------------------*/
    /* Method to update student */
    updateStudent: async (req, res) => {
        try {
            console.log("Je suis dans la methode updateStudent de l'adminController")
            const updateStudent = await User.updateStudent(req.body)
            res.json(updateStudent);
        } catch (error) {
            res.status(500).send(error);
        }
    }
};


/* Exports adminController */
module.exports = adminController;