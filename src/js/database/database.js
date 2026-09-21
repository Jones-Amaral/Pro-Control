let db = null;

export async function getDatabase() {
    if (!db) {
        const Database = window.__TAURI__.sql;

        db = await Database.load(
            "sqlite:procontrol.db"
        );
    }

    return db;
}

export async function inicializarBanco() {
    const database = await getDatabase();

    await database.execute(`
        CREATE TABLE IF NOT EXISTS produtos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            codigo TEXT UNIQUE NOT NULL,
            nome TEXT NOT NULL,
            valor_compra REAL NOT NULL DEFAULT 0,
            valor_venda REAL NOT NULL DEFAULT 0,
            estoque INTEGER NOT NULL DEFAULT 0
        )
    `);

    console.log("Banco inicializado com sucesso.");
}