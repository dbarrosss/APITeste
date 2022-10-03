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

    var retorno = callput(body.id, body.name);

    if (retorno == "Atualizado") {
      res.status(200).json({ message: "Atualizado!" });
    } else {
      res.status(400).json({ message: "Não encontrado!" });
    }
  } else if (req.method === "DELETE") {
    body = null;
    body = req.body;
    var retorno = calldelete(body.id);
    if (retorno == "Deletado") {
      res.status(200).json({ message: "Deletado!" });
    } else {
      res.status(400).json({ message: "Não encontrado!" });
    }
  }
}

function callput(id, name) {
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].id == id) {
      lista[i].name = name;
      return "Atualizado";
    }
  }
  return "Não Encontrado";
}

function calldelete(id) {
  for (var i = 0; i < lista.length; i++) {
    console.log(i);
    if (lista[i].id == id) {
      lista.splice(i, 1);
      return "Deletado";
    }
  }
  return "Não Encontrado";
}

export default handler;
