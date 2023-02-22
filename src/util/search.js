const { read } = require('./read');

const searchTalker = async (name, path) => {
  try {
    const talkers = await read(path);
    const talker = talkers.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase()));

    return talker;
  } catch (error) {
    console.error(`Erro na leitura do arquivo: ${error.message}`);
  }
};

module.exports = searchTalker;