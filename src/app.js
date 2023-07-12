import express from "express";
import cors from "cors"
import routes from "./routes/indexRouter.js";

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Servidor rodado na porta ${port}`))