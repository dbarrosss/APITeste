var lista = [];
var body;

function handler(req, res) {
  if (req.method === "POST") {
    body = null;
    body = req.body;
    lista.push(body);
    res.status(200).json({ name: body.name });
  } else if (req.method === "GET") {
    res.status(200).json({ message: lista });
  } else if (req.method === "PUT") {
    body = null;
    body = req.body;

    for (var i in lista) {
      if (lista[i].id == body.id) {
        lista[i].name = body.name;
        res.status(200).json({ message: "Atualizado!" });
        break;
      }
    }
    res.status(400).json({ message: "Não encontrado!" });
  } else if (req.method === "DELETE") {
    body = null;
    body = req.body;

    for (var i in lista) {
      console.log(i);
      if (lista[i].id == body.id) {
        lista.splice(i, 1);
        res.status(200).json({ message: "Deletado!" });
        break;
      }
    }
    res.status(400).json({ message: "Não encontrado!" });
  }
}
export default handler;
