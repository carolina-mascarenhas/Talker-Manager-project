const express = require('express');
const fs = require('fs').promises;

const routes = express.Router();

const checkName = (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }

  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

const checkAge = (req, res, next) => {
  const { age } = req.body;
  if (!age || age === '') {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }

  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }

  next();
};

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

routes.post('/', checkName, checkAge, async (req, res) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const contentFile = await fs.readFile('./talker.json', 'utf-8');
  const arr = JSON.parse(contentFile);
  arr.push({
    name,
    age,
    talk: { watchedAt, rate },
  });
  console.log(arr);
  await fs.writeFile('./talker.json', JSON.stringify(arr));
  res.status(201).json({ name, age, talk: { watchedAt, rate } });
});

module.exports = routes;