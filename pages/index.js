import Head from "next/head";
import { v4 } from "uuid";

function index() {
  return (
    <>
      <Head>
        <title>Documentation API</title>
      </Head>
      <h1>Teste</h1>
      <h2>API!</h2>
      <text>Uma API para teste das requests e responses</text>

      <div className="boxOutside">
        {/* Método POST  */}
        <div className="box">
          <label for="formPost" className="methods-title">
            POST
          </label>
          <form id="formPost" onSubmit={callpost}>
            <label for="namePost">Nome</label>
            <input name="namePost" id="namePost" type="text" required />
            <label for="logPost">Log</label>
            <textarea name="logPost" id="logPost" disabled></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>

        {/* Método GET  */}
        <div className="box">
          <label for="formGet" className="methods-title">
            GET
          </label>
          <form id="formGet" onSubmit={callget}>
            <label for="logGet">Log</label>
            <textarea name="logGet" id="logGet" disabled></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>

        {/* Método PUT  */}
        <div className="box">
          <label for="formPut" className="methods-title">
            PUT
          </label>
          <form id="formPut" onSubmit={callput}>
            <label for="idPut">ID</label>
            <input id="idPut" name="idPut" required />
            <label for="namePut">Nome(Atualizar)</label>
            <input id="namePut" name="namePut" required />
            <label for="logPut">Log</label>
            <textarea name="logPut" id="logPut" disabled></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>

        {/* Método DELETE  */}
        <div className="box">
          <label for="formDelete" className="methods-title">
            DELETE
          </label>
          <form id="formDelete" onSubmit={calldelete}>
            <label for="idDelete">ID</label>
            <input id="idDelete" name="idDelete" required />
            <label for="logDelete">Log</label>
            <textarea name="logDelete" id="logDelete" disabled></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}
/* CALLPOST */
const callpost = async (event) => {
  event.preventDefault();
  const id = v4();
  const name = event.target.namePost.value;
  const res = await fetch("/api/api", {
    body: JSON.stringify({
      id: id,
      name: name,
    }),
    headers: {
      "Content-Type": "Application/Json",
    },
    method: "POST",
  });

  const result = await res.json();
  event.target.logPost.value = `Nome cadastrado através do 'POST': ${result.name}`;
};

/* CALLGET */
const callget = async (event) => {
  event.preventDefault();
  const res = await fetch("/api/api", {
    headers: {
      "Content-type": "Application/Json",
    },
    method: "GET",
  });

  const result = await res.json();
  event.target.logGet.value = JSON.stringify(result.message, null, 2);
};

/* CALLPUT */
const callput = async (event) => {
  event.preventDefault();
  const id = event.target.idPut.value;
  const name = event.target.namePut.value;
  const res = await fetch("/api/api", {
    body: JSON.stringify({
      id: id,
      name: name,
    }),
    headers: {
      "Content-Type": "Application/Json",
    },
    method: "PUT",
  });

  const result = await res.json();
  event.target.logPut.value = result.message;
};

/* CALLDELETE */
const calldelete = async (event) => {
  event.preventDefault();
  const id = event.target.idDelete.value;
  const res = await fetch("/api/api", {
    body: JSON.stringify({
      id: id,
    }),
    headers: {
      "Content-Type": "Application/Json",
    },
    method: "DELETE",
  });

  const result = await res.json();
  event.target.logDelete.value = result.message;
};
export default index;
