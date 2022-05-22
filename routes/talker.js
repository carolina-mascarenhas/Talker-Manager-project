const express = require('express');
const fs = require('fs').promises;

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

module.exports = routes;