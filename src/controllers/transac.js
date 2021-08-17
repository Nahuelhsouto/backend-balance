import { connect } from "../database";

export const getTrans = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM trans");
  res.json(rows);
};
export const getTran = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM trans WHERE id = ?", [
    req.params.id,
  ]);
  res.json(rows[0]);
};
export const getTranCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM trans");
  res.json(rows[0]["COUNT(*)"]);
};
export const createTran = async (req, res) => {
  const connection = await connect();
  const [result] = await connection.query(
    "INSERT INTO trans (title,valor,fecha) VALUES (?,?,?)",
    [req.body.title, req.body.valor, req.body.fecha]
  );
  res.json({
    id: result.insertId,
    ...req.body,
  });
};
export const deleteTran = async (req, res) => {
  const connection = await connect();
  const [result] = await connection.query("DELETE FROM trans WHERE id = ?", [
    req.params.id,
  ]);
  res.json();
};
export const updateTran = async (req, res) => {
  const connection = await connect();
  const result = await connection.query("UPDATE trans SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};
