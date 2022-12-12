import express from "express";
import {
    getCurso,
    getCursoById,
    createCurso,
    updateCurso,
    deleteCurso,
    updateImagen,
    imagen,
    buscador,
} from "../controllers/curso.js";
//Usar require
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

//Subir Imagen 
const multer = require("multer")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './img');
    },
    filename: (req, file, cb) => {
        cb(null, "curso" + Date.now() + file.originalname);
    }
})
const subidas = multer({ storage: storage });

const router = express.Router();

router.get("/curso", getCurso);
router.get("/curso/:id", getCursoById);
router.post("/curso", createCurso);
router.put("/curso/:id", updateCurso);
router.delete("/curso/:id", deleteCurso);
router.post("/subir-imagen/:id", [subidas.single("file0")], updateImagen);
router.get("/imagen/:fichero",imagen);
router.get("/buscar/:busqueda",buscador)
// router.get("/buscar/:busqueda",buscador);
export default router;