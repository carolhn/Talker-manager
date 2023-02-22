const path = require('path');
const fs = require('fs').promises;

const talkerPath = path.resolve(__dirname, '../talker.json');

async function read() {
    try {
    const data = await fs.readFile(talkerPath);
    const talker = JSON.parse(data);
    return talker;
    } catch (error) {
        console.error(`Arquivo não esta sendo lido${error}`);
    }
}

module.exports = { read };

// Arquivo de leitura do banco de dados;