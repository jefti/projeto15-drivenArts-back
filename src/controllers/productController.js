import { db } from "../database/database.js";
import { ObjectId } from "mongodb";

export async function cadatraProduto(req,res){
    const produto = req.body;
    try{
        const teste = await db.collection("produtos").findOne({ nome: produto.nome });
        if(teste) return res.status(422).send("já existe um produto com mesmo nome cadastrado.");
        res.send(teste);
        await db.collection("produtos").insertOne(produto);
        res.status(201).send(`${produto.nome} cadastrado com sucesso!`);
    }catch(err){
        return res.status(500).send(err.message);
    }
}

export async function retornaTodosProdutos(req, res){
    try{
        const lista = await db.collection("produtos").find({}).toArray();
        res.send(lista) ;
    }catch(err){
        return res.status(500).send(err.message);
    }
}

export async function retornaCategoriaProdutos(req, res){
    try{
        const categoria = req.params.categoria;
        if(!categoria) return res.status(401).send('id não encontrado na requisição.');
        const lstCategorias = ['quadro', 'ilustracao','escultura'];
        if(!lstCategorias.includes(categoria)) return res.status(404).send('categoria não encontrada.');
        const lista = await db.collection("produtos").find({categoria}).toArray();
        return res.send(lista);

        }catch(err){
            return res.status(500).send(err.message);
    }
}

export async function retornaProduto(req, res){
    try{
        const id = new ObjectId(req.params.id);
        if(!id) return res.status(401).send('id não encontrado na requisição.');
        const produto = await db.collection("produtos").findOne({_id:id});
        if(!produto) return res.status(404).send('Não foi encontrado nenhum produto com o ID informado.');
        return res.send(produto);
    }catch(err){
            return res.status(500).send(err.message);
    }
}