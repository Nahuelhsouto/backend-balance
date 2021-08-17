import app from "./app";
import { config as dotenv } from "dotenv";
dotenv();

app.listen(process.env.PORT);

console.log("Server en el puerto 3000");
