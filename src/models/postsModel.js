import conectarAoBanco from "./src/config/dbConfig.js";

// console.log(process.env.STRING_CONEXAO);

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export default async function getTodosPosts() {
  const db = conexao.db("imersao-instabyte");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
}
