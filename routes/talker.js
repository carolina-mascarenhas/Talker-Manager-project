const express = require('express');
const fs = require('fs').promises;
const validations = require('../middlewares/talkerMiddleware');

const routes = express.Router();

routes.get('/', (_req, res) => {
  fs.readFile('./talker.json', 'utf-8')
    .then((fileContent) => {
      const arr = JSON.parse(fileContent);
      res.status(200).json(arr);
    });
});

routes.get('/:id', (req, res) => {
  fs.readFile('./talker.json', 'utf-8')
    .then((fileContent) => {
      const arr = JSON.parse(fileContent);
      const { id } = req.params;
      const findById = arr.find((obj) => obj.id === parseInt(id, 10));
      
      if (!findById) {
        return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
      }
      res.status(200).json(findById);
    });
});

routes.post('/',
  validations.checkToken,
  validations.checkName,
  validations.checkAge, 
  validations.checkTalk,
  validations.checkWatchedAtKeys, 
  validations.checkRateKeys, async (req, res) => {
    const { name, age, talk: { watchedAt, rate } } = req.body;
    const contentFile = await fs.readFile('./talker.json', 'utf-8');
    const arr = JSON.parse(contentFile);
    arr.push({
      name,
      age,
      id: arr.length + 1,
      talk: { watchedAt, rate },
    });
    await fs.writeFile('./talker.json', JSON.stringify(arr));
    res.status(201).json({ name, age, id: arr.length, talk: { watchedAt, rate } });
  });

module.exports = routes;