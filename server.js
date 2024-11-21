import express from "express";
import routes from "./src/routes/postsRoutes.js";

// const posts = [
//   { id: 1, descrição: "Uma foto para teste", imagem: "https://placecats.com/millie/300/150" },
//   { id: 2, descrição: "Mais um post incrível!", imagem: "https://picsum.photos/id/237/300/200" },
//   { id: 3, descrição: "Texto interessante sobre programação", imagem: "https://source.unsplash.com/random" },
//   { id: 4, descrição: "Meme engraçado sobre JavaScript", imagem: "https://i.imgur.com/xY3KqL9.jpg" },
//   { id: 5, descrição: "Vídeo tutorial sobre Node.js", imagem: "https://www.youtube.com/embed/dQw4w9WgXcQ" }, // Um clássico!
// ];

const app = express();
routes(app);

app.listen(3000, () => {
  console.log("servidor escutando");
});
