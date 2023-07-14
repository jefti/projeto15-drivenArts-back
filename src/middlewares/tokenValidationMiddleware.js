import { db } from "../database/database.js ";

export async function tokenValidate(req, res, next){
    const { authorization } = req.header;
    const token = authorization?.replace('Bearer ', '');

    if(!token) return res.status(401).send('Token não encontrado na requisição.');

    const session = db.collection("sessoes").findOne({token});
    if (!session) return res.status(401).send('Token de login não encontrado no sistema.');

    res.locals.id_usuario = session.id_usuario;
    
    next();
}