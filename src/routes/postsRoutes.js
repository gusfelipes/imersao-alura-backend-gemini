import express from "express";
import multer from "multer";
import { listarTodosPosts, enviarNovoPost, uploadImagem } from "../controllers/postsControllers.js";

// Esse código abaixo só serve para o window
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
  app.use(express.json());

  app.get("/", (req, res) => {
    res.status(200).json("Bem vindo a Imersão Alura");
  });

  app.get("/posts", listarTodosPosts);
  app.post("/posts", enviarNovoPost);
  app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes;
