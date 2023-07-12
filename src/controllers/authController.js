import { db } from "../database.js";
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

export async function signin(req, res) {
    const { email, senha } = req.body

    try {
        const usuario = await db.collection("usuarios").findOne({ email })
        if (!usuario) return res.status(404).send("Esse email não existe.")

        const senhaCorreta = !bcrypt.compareSync(senha, usuario.senha)
        if (!senhaCorreta) return res.status(401).send("Senha incorreta")

        const token = uuid()
        await db.collection("sessoes").insertOne({ token, id_usuario: usuario._id })


        res.send({ token })
    } catch (err) {
        return res.status(500).send(err.message)
    }
}
