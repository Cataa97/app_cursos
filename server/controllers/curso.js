import Curso from "../models/curso.js";
//Usar require
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require("fs");
const path = require("path");

export const getCurso = async (req, res) => {
    try {
        const curso = await Curso.findAll();
        res.send(curso);
    } catch (err) {
        console.log(err);
    }
}

export const getCursoById = async (req, res) => {
    try {
        const curso = await Curso.findByPk(req.params.id);
        if (!curso) {
            res.status(404).send({
                message: `No se encuentra Curso con id ${req.params.id}`
            });
        }
        res.send(curso)
    } catch (err) {
        console.log(err);
    }
}

export const createCurso = async (req, res) => {
    try {
        await Curso.create(req.body);
        res.json({
            "message": "Curso creado con éxito!"
        })
    } catch (err) {
        console.log(err);
    }
}

export const deleteCurso = async (req, res) => {
    try {
        const curso = await Curso.findByPk(req.params.id);
        if (!curso) {
            res.status(404).send({
                message: `No se encuentra Curso con id ${req.params.id}`
            });
            return;
        }
        await Curso.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Curso eliminado con éxito"
        });
    } catch (err) {
        console.log(err);
    }
}

export const updateCurso = async (req, res) => {
    try {
        const curso = await Curso.findByPk(req.params.id);
        if (!curso) {
            res.status(404).send({
                message: `No se ha encontrado Curso por id ${req.params.id}`
            });
            return
        }
        await Curso.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Curso actualizado con éxito"
        });
    } catch (err) {
        console.log(err);
    }
}

export const updateImagen = (req, res) => { //Falta 
    if (!req.file && !req.files) {
        return res.status(404).json({
            status: "error",
            message: "Petición inválida"
        })
    }
    let archivo = req.file.originalname;
    let archivo_split = archivo.split("\.");
    let extension = archivo.split[1];

    if (["png", "jpg", "jpeg", "gif"].includes(extension)) {
        fs.unlink(req.file.path, (error) => {
            return res.status(400).json({
                status: "error",
                message: "Imagen inválida"
            })
        })
    } else {
        return res.status(200).json({
            extension,
            archivo_split,
            status: "success",
            files: req.file
        })
    }

}


export const imagen = (req, res) => { //Falta 
    let fichero = req.params.fichero;
    let ruta_fisica = "./img" + fichero;

    fs.stat(ruta_fisica, (error, exist) => {
        if (exist) {
            return res.sendFile(path.resolve(ruta_fisica));
        } else {
            return res.status(404).json({
                status: "error",
                message: "La imagen no existe",
                exist,
                fichero,
                ruta_fisica
            })
        }
    })
}



export const buscador = async (req, res) => {  //Falta 
    try {
        const curso = await Curso.findAll({
            "$or": [
                { "titulo": { "$regex": busqueda, "$options": "i" } },
                { "descripcion": { "$regex": busqueda, "$options": "i" } }
            ]
        })
            .exec((error, cursosEncontrados) => {
                if (error || !cursosEncontrados) {
                    return res.status(404).json({
                        status: "error",
                        message: "No se han encontrado cursos"
                    });
                }
                return res.status(200).json({
                    status: "success",
                    Curso
                })

            })
    } catch (err) {
        console.log(err);
    };
}