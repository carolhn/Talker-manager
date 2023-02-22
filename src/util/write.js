const path = require('path');
const fs = require('fs').promises;
const { read } = require('./read');

const talkerPath = path.resolve(__dirname, '../talker.json');

async function write(newTalker) {
    try {
      const oldData = await read();
      const newTalkers = JSON.stringify([...oldData, newTalker]);
      await fs.writeFile(talkerPath, newTalkers);
    } catch (error) {
      console.log(`Erro na ecrita do arquivo: ${error}`);
    }
}
module.exports = { write };