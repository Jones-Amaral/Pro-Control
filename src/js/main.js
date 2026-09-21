import { inicializarBanco, getDatabase } from "./database/database.js";

async function iniciar() {
    try {
        await inicializarBanco();

        const db = await getDatabase();

    } catch (erro) {
        console.error("Erro:", erro);
    }
}

iniciar();