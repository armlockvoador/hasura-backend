import client from "./connection";
import { deleteProduct, insertProduct, insertUser, updateProduct, deleteUser, updateUser } from "./mutations";
import { getProductsList, getUsersList } from "./queries";
import { IDENTITY_TYPE } from "../enum/UserEnum";

export const insertUsers = async (
    tipo: IDENTITY_TYPE,
    foto: String,
    identificador: String,
    username: String,
    create_at: Date,
    update_at: Date

) => {
    try {
        await client.request(insertUser, {
            tipo,
            foto,
            identificador,
            username,
            create_at,
            update_at
        });
    } catch (error) {
    }
};

export const insertProdutos = async (
    nome: String,
    quantidade: Number,
    registro: String,
    create_at: Date,
    update_at: Date,
    idUser: Number,
    preco: Number

) => {
    try {
        await client.request(insertProduct, {
            nome,
            quantidade,
            registro,
            create_at,
            update_at,
            idUser,
            preco
        });
    } catch (error) {
    }
};

export const update_users = async (
    id: Number,
    tipo: IDENTITY_TYPE,
    foto: String,
    identificador: String,
    username: String,
    create_at: Date,
    update_at: Date

) => {
    try {
        await client.request(updateUser, {
            id,
            tipo,
            foto,
            identificador,
            username,
            create_at,
            update_at
        });
    } catch (error) {
    }
};

export const update_produtos = async (
    nome: String,
    quantidade: Number,
    registro: String,
    create_at: Date,
    update_at: Date,
    idUser: Number,
    preco: Number

) => {
    try {
        await client.request(updateProduct, {
            nome,
            quantidade,
            registro,
            create_at,
            update_at,
            idUser,
            preco
        });
    } catch (error) {
    }
};

export const delete_users = async (
    id: number
) => {
    try {
        await client.request(deleteUser, {
            id
        });
    } catch (error) {
    }
};

export const delete_produtos = async (
    id: number
) => {
    try {
        await client.request(deleteProduct, {
            id
        });
    } catch (error) {
    }
};

export const getUserList = async () => {
    try {
        const data = await client.rawRequest(getUsersList);
        const users = data.data;
        return users;
    } catch (error) {
    }
};

export const getProductList = async () => {
    try {
        const data = await client.rawRequest(getProductsList);
        const products = data.data;
        return products;
    } catch (error) {
    }
};