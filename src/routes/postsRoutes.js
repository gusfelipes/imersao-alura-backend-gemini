import express from "express";
import { listarTodosPosts } from "../controllers/postsControllers.js";

const routes = (app) => {
  app.use(express.json());

  app.get("/", (req, res) => {
    res.status(200).send("Boas vindas à imersão!");
  });

  app.get("/api", (req, res) => {
    res.status(200).send("AToore Eiffel iluminada à noite, com milhares de luzes cintilando, criando um espetáculo mágico em Paris!");
  });

  app.get("/posts", listarTodosPosts);

  function buscarPostPorID(id) {
    return posts.findIndex((post) => {
      return post.id === Number(id);
    });
  }

  app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
  });
};

export default routes;
