import { db } from "../database/database.js";
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

export async function signin(req, res) {
    const { email, senha } = req.body

    try {
        const usuario = await db.collection("usuarios").findOne({ email })
        if (!usuario) return res.status(404).send("Esse email não existe.")
        
        const senhaCorreta = !bcrypt.compareSync(usuario.senha, senha)
        if (!senhaCorreta) return res.status(401).send("Senha incorreta")

        const token = uuid()
        await db.collection("sessoes").insertOne({ token, id_usuario: usuario._id })


        res.send({ token })
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export async function signup(req, res){
    try{
        const {nome, email, senha, foto, telefone} = req.body;
        const verification = await db.collection("usuarios").findOne({email})
        if(verification) return res.status(422).send("Esse email já está cadastrado.")
        const passwordHash = bcrypt.hashSync(senha, 10);
        const obj = {nome, email, senha:passwordHash, foto, telefone};
        await db.collection("usuarios").insertOne(obj);
        res.status(201).send(`email ${email} cadastrado com sucesso!`);
    }catch{
        return res.status(500).send(err.message)
    }
}

export async function getUsers(req, res){
    try{
        const lista = await db.collection("usuarios").find().toArray()
        return res.send(lista).status(200);
    }catch{
        return res.status(500).send(err.message)
    }
}


export async function ping(req, res){
    try{
        return res.send("Servidor online!");
    }catch{
        return res.status(500).send(err.message)
    }
}