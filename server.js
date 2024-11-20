import express from "express";
const posts = [
  { id: 1, descrição: "Uma foto para teste", imagem: "https://placecats.com/millie/300/150" },
  { id: 2, descrição: "Mais um post incrível!", imagem: "https://picsum.photos/id/237/300/200" },
  { id: 3, descrição: "Texto interessante sobre programação", imagem: "https://source.unsplash.com/random" },
  { id: 4, descrição: "Meme engraçado sobre JavaScript", imagem: "https://i.imgur.com/xY3KqL9.jpg" },
  { id: 5, descrição: "Vídeo tutorial sobre Node.js", imagem: "https://www.youtube.com/embed/dQw4w9WgXcQ" }, // Um clássico!
];
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("servidor escutando");
});

app.get("/", (req, res) => {
  res.status(200).send("Boas vindas à imersão!");
});

app.get("/api", (req, res) => {
  res.status(200).send("AToore Eiffel iluminada à noite, com milhares de luzes cintilando, criando um espetáculo mágico em Paris!");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});
